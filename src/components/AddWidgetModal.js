import React, { useState , useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Box, Checkbox, FormControlLabel, Tabs, Tab, Button, TextField, Typography } from "@mui/material";
import { addWidget, addNewWidget } from "../redux/widgetSlice";
import "../style/styles.css";

const AddWidgetModal = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.widget.categories);
  const allWidgets = useSelector((state) => state.widget.allWidgets);
  const filter = useSelector((state) => state.widget.filter);
  const [selectedTab, setSelectedTab] = useState(Object.keys(categories)[0] || "");
  const [selectedWidgets, setSelectedWidgets] = useState({});
  const [newWidgetName, setNewWidgetName] = useState("");

  
  useEffect(() => {
    const initialSelectedWidgets = {};
    (categories[selectedTab] || []).forEach((widget) => {
      initialSelectedWidgets[widget.id] = true;
    });
    setSelectedWidgets(initialSelectedWidgets);
  }, [selectedTab, categories]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleWidgetSelection = (widgetId) => {
    setSelectedWidgets((prevState) => ({
      ...prevState,
      [widgetId]: !prevState[widgetId],
    }));
  };

  const handleConfirmSelection = () => {
    const updatedCategoryWidgets = allWidgets.filter(
      (widget) => selectedWidgets[widget.id]
    );
    dispatch(addWidget({ category: selectedTab, widgets: updatedCategoryWidgets }));
    handleClose();
  };

  const handleAddNewWidget = () => {
    if (newWidgetName) {
      const newWidget = {
        id: allWidgets.length + 1,
        name: newWidgetName,
      };
      dispatch(addNewWidget(newWidget));
      setNewWidgetName("");
    }
  };

  const filteredWidgets = (widgets) =>
    widgets.filter((widget) => widget.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal-box" sx={{ maxHeight: "90vh", overflowY: "auto" }}>
        <h3>Select Widgets to Add</h3>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="widget categories"
          className="tab-button"
        >
          {Object.keys(categories).map((category) => (
            <Tab key={category} label={category} value={category} />
          ))}
        </Tabs>
        {filteredWidgets(allWidgets).map((widget) => (
          <FormControlLabel
            key={widget.id}
            control={
              <Checkbox
                checked={selectedWidgets[widget.id] || false}
                onChange={() => handleWidgetSelection(widget.id)}
              />
            }
            label={widget.name}
          />
        ))}

        <h4>Add New Widget</h4>
        <TextField
          value={newWidgetName}
          onChange={(e) => setNewWidgetName(e.target.value)}
          placeholder="Widget Name"
          fullWidth
        />
        <Typography variant="div" className="model-button">
        <Button onClick={handleAddNewWidget}>Add New Widget</Button>

        <Button variant="contained" color="primary" onClick={handleConfirmSelection}>
          Confirm
        </Button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default AddWidgetModal;

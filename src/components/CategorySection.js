import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Typography, Card, CardContent } from "@mui/material";
import { removeWidget } from "../redux/widgetSlice";
import WidgetGrid from "./WidgetGrid";
import AddWidgetModal from "./AddWidgetModal";
import "../style/styles.css";

const CategorySection = ({ category }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.widget.filter);
  const [openWidgetModal, setOpenWidgetModal] = React.useState(false);
  const widgets = useSelector((state) =>
    state.widget.categories[category] || []
  );

  
  const handleOpenWidgetModal = () => setOpenWidgetModal(true);
  const handleCloseWidgetModal = () => setOpenWidgetModal(false);
  return (
    <div key={category}>
      <h2>{category} Dashboard:</h2>
      <div className="widget-grid">
        <WidgetGrid
          widgets={widgets}
          filter={filter}
          category = {category}
        
        />
        <Card className="widget-card add-widget-cointainer">
          <CardContent>
            <Button className="add-widget" onClick={handleOpenWidgetModal}>Add Widget +</Button>
          </CardContent>
        </Card>
        <AddWidgetModal
        open={openWidgetModal}
        handleClose={handleCloseWidgetModal}
      />
      </div>
    </div>
  );
};

export default CategorySection;

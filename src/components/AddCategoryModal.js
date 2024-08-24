import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Box, Button, TextField } from "@mui/material";
import { addCategory } from "../redux/widgetSlice";
import "../style/styles.css";

const AddCategoryModal = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [newCategoryName, setNewCategoryName] = useState("");

  const handleAddCategory = () => {
    if (newCategoryName) {
      dispatch(addCategory(newCategoryName));
      setNewCategoryName("");
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal-box">
        <h4>Add New Category</h4>
        <TextField
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          placeholder="Category Name"
          fullWidth
        />
        <Button onClick={handleAddCategory}>Add New Category</Button>
      </Box>
    </Modal>
  );
};

export default AddCategoryModal;

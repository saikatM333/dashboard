

import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from "react-redux";
import { removeWidget } from "../redux/widgetSlice";
import "../style/styles.css";
const Widget = ({ widget, category }) => {
    const dispatch = useDispatch();
    
    const handleRemoveWidget = (category , widgetId) => {
        
        dispatch(removeWidget({ category, widgetId }));
        
      };
  return (
    <Card className="widget-card">
      <CardContent>
        <Typography variant="h5">{widget.name}</Typography>
        <Typography>{widget.text}</Typography>
        <IconButton onClick={() => handleRemoveWidget(category, widget.id)}>
          <CloseIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Widget;

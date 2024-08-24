import React from "react";
import Widget from "./Widget";
import "../style/styles.css";

const WidgetGrid = ({ widgets, filter, category }) => {
  const filteredWidgets = (widgets) =>
    widgets.filter((widget) => widget.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      {filteredWidgets(widgets).map((widget) => (
        <Widget
          key={widget.id}
          widget={widget}
        
         category = {category}
          className="widget-card"
        />
      ))}
    </>
  );
};

export default WidgetGrid;
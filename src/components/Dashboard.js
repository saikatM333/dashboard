import React from "react";
import { useSelector } from "react-redux";
import DashboardHeader from "./DashboardHeader";
import CategorySection from "./CategorySection";
import AddWidgetModal from "./AddWidgetModal";
import AddCategoryModal from "./AddCategoryModal";
import { Button, Card, CardContent, Typography } from "@mui/material";
import "../style/styles.css";

const Dashboard = () => {
    
    const state = useSelector((state) => state);


  const categories = useSelector((state) => state.widget.categories);
  
  const [openWidgetModal, setOpenWidgetModal] = React.useState(false);
  const [openCategoryModal, setOpenCategoryModal] = React.useState(false);

  

  const handleOpenCategoryModal = () => setOpenCategoryModal(true);
  const handleCloseCategoryModal = () => setOpenCategoryModal(false);

  const handleOpenWidgetModal = () => setOpenWidgetModal(true);
  const handleCloseWidgetModal = () => setOpenWidgetModal(false);
  
  return (
    <div className="dashboard-container">
      <DashboardHeader />

      <div className="dash-cointainer">
      <Typography className="typography-container">
        <Typography className="title">
         <h2> CNAPP Dashboard</h2>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenWidgetModal}
          className="add-widget-button"
        >
          Add Widget +
        </Button>
      </Typography>

        {Object.keys(categories).map((category) => (
            <div>
          <CategorySection key={category} category={category} />
          
          </div>
        ))}
        
        <h2>New category Dashboard:</h2>
        <Card className="widget-card add-widget-cointainer">
          <CardContent>
            <Button className="add-widget" onClick={handleOpenCategoryModal}>
              Add New Category +
            </Button>
          </CardContent>
        </Card>
      </div>

      <AddWidgetModal
        open={openWidgetModal}
        handleClose={handleCloseWidgetModal}
      />
      
      <AddCategoryModal
        open={openCategoryModal}
        handleClose={handleCloseCategoryModal}
      />
    </div>
  );
};

export default Dashboard;

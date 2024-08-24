import React from "react";
import { AppBar, Toolbar, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/widgetSlice";
import "../style/styles.css";

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.widget.filter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <AppBar position="static" className="app-bar">
      <Toolbar>
        <Typography variant="h6" className="title-upper-header title">
          <span className="home">HOME</span>
          <span className="separator">{">"}</span>
          <span className="dashboard">Dashboard V2</span>
        </Typography>

        <div className="search">
          <InputBase
            placeholder="Search anything..."
            value={filter}
            onChange={handleFilterChange}
            classes={{
              root: "input-root",
              input: "input-input",
            }}
          />
          <div className="search-icon">
            <SearchIcon />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;

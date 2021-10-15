import React from "react";
import "./AdminPanelSchList.css";
import StatusCard from "./StatusCard/StatusCard";

const AdminPanelSchList = () => {
  return (
    <div className="main-status-container">
      <span className="status-title">Change Scholarship Status</span>

      <div className="search-sch">
        <input type="text" placeholder="Search Scholarship" />
      </div>
      <div className="status-container">
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
      </div>
    </div>
  );
};

export default AdminPanelSchList;

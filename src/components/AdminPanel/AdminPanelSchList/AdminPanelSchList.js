import React from "react";
import "./AdminPanelSchList.css";
import StatusCard from "./StatusCard/StatusCard";
import { useHistory } from "react-router";

const AdminPanelSchList = () => {
  const history = useHistory();
  return (
    <div className="main-status-container">
      <span className="status-title">Change Scholarship Status</span>
      <button
        className="admin-panel-button"
        onClick={() => history.push("/adminPanel")}
      >
        {" "}
        {"<<< Admin Panel"}
      </button>

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

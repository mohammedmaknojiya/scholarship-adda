import React from "react";
import AdminCard from "./AdminCard/AdminCard";
import "./AdminPanel.css";

const AdminPanel = () => {
  return (
    <div>
      <div className="admin-title">
        <span className="admin-title-text">Admin Panel</span>
      </div>
      <div className="admin-card-list">
        <AdminCard
          title="Change Scholarship Status"
          btnText="See List"
          redirectUrl="/adminPanelSchList"
        />
        <AdminCard
          title="Verify Scholarship Request"
          btnText="Verify Scholarship"
          redirectUrl="/adminPanelVerify"
        />
      </div>
      <br />
    </div>
  );
};

export default AdminPanel;

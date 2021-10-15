import React from "react";
import "./StatusCard.css";

const StatusCard = () => {
  return (
    <div className="status-card">
      <div className="sch-detail">
        <span className="sch-name">Scholarship Name:</span>
        <span className="sch-value">National Scholarship</span>
      </div>
      <div className="status-buttons">
        <button className="status-button">Active</button>
        <button className="status-button">In-Active</button>
        <button className="status-button">Delete</button>
      </div>
    </div>
  );
};

export default StatusCard;

import React from "react";
import "./ScholarshipCard.css";

const ScholarshipCard = ({ name, type, currentlyActive }) => {
  return (
    <div className="card-items">
      <div className="card-name">
        Name: <span>{name}</span>
      </div>
      <div>
        Type: <span>{type}</span>
      </div>
      <div>
        Currently Active: <span>{currentlyActive}</span>
      </div>
      <button className="card-button">{"Know More >>"}</button>
    </div>
  );
};

export default ScholarshipCard;

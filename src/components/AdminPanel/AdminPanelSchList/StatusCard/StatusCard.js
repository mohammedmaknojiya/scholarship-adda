import React from "react";
import "./StatusCard.css";
import { useDispatch } from "react-redux";
import {
  removeScholarship,
  changeStatusActive,
  changeStatusInActive,
} from "../../../../Redux/ActionCreators";

const StatusCard = ({ name, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="status-card">
      <div className="sch-detail">
        <span className="sch-name">Scholarship Name:</span>
        <span className="sch-value">{name}</span>
      </div>
      <div className="status-buttons">
        <button
          className="status-button"
          onClick={() => dispatch(changeStatusActive(id))}
        >
          Active
        </button>
        <button
          className="status-button"
          onClick={() => dispatch(changeStatusInActive(id))}
        >
          In-Active
        </button>
        <button
          className="status-button"
          onClick={() => dispatch(removeScholarship(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default StatusCard;

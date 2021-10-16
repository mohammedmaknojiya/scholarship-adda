import React from "react";
import { useHistory } from "react-router";
import "./AdminCard.css";

const AdminCard = (props) => {
  const history = useHistory();

  return (
    <div className="admin-card">
      <span className="admin-card-title">{props.title} </span>
      <button
        className="admin-card-button"
        onClick={() => history.push(props.redirectUrl)}
      >
        {props.btnText}
      </button>
    </div>
  );
};

export default AdminCard;

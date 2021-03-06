import React from "react";
import { useHistory } from "react-router";
import "./HomeCard.css";

const HomeCard = (props) => {
  const history = useHistory();

  return (
    <div className="card">
      <span className="card-title">{props.title} </span>
      <button
        className="card-button"
        onClick={() => history.push(props.redirectUrl)}
      >
        {props.btnText}
      </button>
    </div>
  );
};

export default HomeCard;

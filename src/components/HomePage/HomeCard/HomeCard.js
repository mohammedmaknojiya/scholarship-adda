import React from "react";
import "./HomeCard.css";

const HomeCard = (props) => {
  return (
    <div className="card">
      <span className="card-title">{props.title} </span>
      <button className="card-button">{props.btnText}</button>
    </div>
  );
};

export default HomeCard;

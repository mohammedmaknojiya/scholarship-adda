import React from "react";
import "./DetailsModal.css";

const DetailsModal = (props) => {
  return (
    <>
      <div
        className="overlay"
        onClick={() => props.setDisplayModal(false)}
      ></div>
      <div className="details-modal">
        <span>Scholarship Name:</span>
        <span>National Scholarship</span>
        <button
          className="close-button"
          onClick={() => props.setDisplayModal(false)}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default DetailsModal;

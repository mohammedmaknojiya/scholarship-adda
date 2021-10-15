import React, { useState } from "react";
import DetailsModal from "../DetailsModal/DetailsModal";
import "./VerifyCard.css";

const VerifyCard = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <div className="verify-card">
      {displayModal ? <DetailsModal setDisplayModal={setDisplayModal} /> : null}
      <div className="sch-detail">
        <span className="sch-name">Scholarship Name:</span>
        <span className="sch-value">National Scholarship</span>
      </div>
      <div className="verify-buttons">
        <button
          className="verify-button"
          onClick={() => {
            setDisplayModal(true);
          }}
        >
          See Details
        </button>
        <button className="verify-button">Approve</button>
        <button className="verify-button">Dis-Approve</button>
      </div>
    </div>
  );
};

export default VerifyCard;

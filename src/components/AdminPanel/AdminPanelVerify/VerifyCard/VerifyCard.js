import React, { useState } from "react";
import DetailsModal from "../DetailsModal/DetailsModal";
import {
  approveScholarship,
  disapproveScholarship,
} from "../../../../Redux/ActionCreators";
import { useDispatch } from "react-redux";
import "./VerifyCard.css";

const VerifyCard = ({ name, id }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="verify-card">
      {displayModal ? <DetailsModal setDisplayModal={setDisplayModal} /> : null}
      <div className="sch-detail">
        <span className="sch-name">Scholarship Name:</span>
        <span className="sch-value">{name}</span>
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
        <button
          className="verify-button"
          onClick={() => dispatch(approveScholarship(id))}
        >
          Approve
        </button>
        <button
          className="verify-button"
          onClick={() => dispatch(disapproveScholarship(id))}
        >
          Dis-Approve
        </button>
      </div>
    </div>
  );
};

export default VerifyCard;

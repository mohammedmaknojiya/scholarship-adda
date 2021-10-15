import React from "react";
import "./SingleScholarship.css";

const SingleScholarship = () => {
  return (
    <div>
      <button className="goback-button">Scholarship List</button>
      <button className="goback-button">Home Page</button>
      <div className="sch-details">
        <span className="sch-header">Scholarship Details:</span>
        <div className="single-info">
          <span className="sch-title">Scholarship Name:</span>
          <span className="sch-info">{"National Scholarship"}</span>
        </div>
        <div className="single-info">
          <span className="sch-title">Government / Private:</span>
          <span className="sch-info">{"Government"}</span>
        </div>
        <div className="single-info">
          <span className="sch-title">National / Regional:</span>
          <span className="sch-info">{"National"}</span>
        </div>
        <div className="single-info">
          <span className="sch-title">Eligiblity Criteria:</span>
          <span className="sch-info">{"National Scholarship"}</span>
        </div>
        <div className="single-info">
          <span className="sch-title">Income Limit:</span>
          <span className="sch-info">{"500000"}</span>
        </div>
        <div className="single-info">
          <span className="sch-title">Deadline:</span>
          <span className="sch-info">{"26 Jan 2021"}</span>
        </div>
        <div className="single-info">
          <span className="sch-title">Procedure:</span>
          <span className="sch-info">{"Go to below Link"}</span>
        </div>
        <div className="single-info">
          <span className="sch-title">Link To Apply:</span>
          <span className="sch-info">{"National Scholarship"}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleScholarship;

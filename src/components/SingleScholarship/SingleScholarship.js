import React from "react";
import { useHistory, useParams } from "react-router";
import "./SingleScholarship.css";
import { useSelector } from "react-redux";

const SingleScholarship = () => {
  const history = useHistory();
  const { id } = useParams();
  const data = useSelector((state) => state.Reducer.data);
  const singleSchData = data.find((obj) => obj.sch_id === parseInt(id));
  return (
    <div>
      <button
        className="goback-button"
        onClick={() => history.push("/allSchList")}
      >
        Scholarship List
      </button>
      <button className="goback-button" onClick={() => history.push("/")}>
        Home Page
      </button>
      <div className="sch-details">
        <span className="sch-header">Scholarship Details:</span>
        <div className="single-info">
          <span className="sch-title">Scholarship Name:</span>
          <span className="sch-info">{singleSchData.sch_name}</span>
        </div>
        <div className="single-info">
          <span className="sch-title">Government / Private:</span>
          <span className="sch-info">{singleSchData.gov_or_private}</span>
        </div>
        <div className="single-info">
          <span className="sch-title">National / Regional:</span>
          <span className="sch-info">{singleSchData.nat_or_reg}</span>
        </div>
        <div className="single-info">
          <span className="sch-title">Eligiblity Criteria:</span>
          <span className="sch-info">{singleSchData.eligiblity}</span>
        </div>
        <div className="single-info">
          <span className="sch-title">Income Limit:</span>
          <span className="sch-info">{singleSchData.income_limit}</span>
        </div>
        <div className="single-info">
          <span className="sch-title">Deadline:</span>
          <span className="sch-info">{singleSchData.deadline}</span>
        </div>
        <div className="single-info">
          <span className="sch-title">Procedure:</span>
          <span className="sch-info">{singleSchData.procedure}</span>
        </div>
        <div className="single-info">
          <span className="sch-title">Link To Apply:</span>
          <span className="sch-info">{singleSchData.link_to_apply}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleScholarship;

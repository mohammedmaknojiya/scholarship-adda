import React from "react";
import ScholarshipCard from "./ScholarshipCard/ScholarshipCard";
import { useSelector } from "react-redux";
import "./AllScholarshipList.css";

const AllScholarshipList = () => {
  const data = useSelector((state) => state.Reducer.data);

  const schList = data.map((single_obj) => {
    return (
      <ScholarshipCard
        key={single_obj.sch_id}
        id={single_obj.sch_id}
        name={single_obj.sch_name}
        type={single_obj.gov_or_private}
        currentlyActive={single_obj.active_inactive}
      />
    );
  });

  return (
    <div>
      <span className="scholarship-title">All Scholarship List</span>
      <div className="search-bar-items">
        <div className="search-menu">
          <input type="text" placeholder="Search Scholarship" />
        </div>
        <div className="select-menu">
          <select>
            <option value="all">Select Status </option>
            <option value="active">Active</option>
            <option value="in-active">In-Active</option>
          </select>
        </div>
        <div className="select-menu">
          <select>
            <option value="all">Select Type </option>
            <option value="government">Government</option>
            <option value="private">Private</option>
          </select>
        </div>
      </div>
      <div className="card-list">{schList}</div>
    </div>
  );
};

export default AllScholarshipList;

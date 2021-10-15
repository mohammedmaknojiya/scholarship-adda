import React from "react";
import ScholarshipCard from "./ScholarshipCard/ScholarshipCard";
import "./AllScholarshipList.css";
const AllScholarshipList = () => {
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
      <div className="card-list">
        <ScholarshipCard
          name="National Scholarship"
          type="government"
          currentlyActive="yes"
        />
        <ScholarshipCard
          name="National Scholarship"
          type="government"
          currentlyActive="yes"
        />
        <ScholarshipCard
          name="National Scholarship"
          type="government"
          currentlyActive="yes"
        />
        <ScholarshipCard
          name="National Scholarship"
          type="government"
          currentlyActive="yes"
        />
        <ScholarshipCard
          name="National Scholarship"
          type="government"
          currentlyActive="yes"
        />
        <ScholarshipCard
          name="National Scholarship"
          type="government"
          currentlyActive="yes"
        />
        <ScholarshipCard
          name="National Scholarship"
          type="government"
          currentlyActive="yes"
        />
        <ScholarshipCard
          name="National Scholarship"
          type="government"
          currentlyActive="yes"
        />
        <ScholarshipCard
          name="National Scholarship"
          type="government"
          currentlyActive="yes"
        />
        <ScholarshipCard
          name="National Scholarship"
          type="government"
          currentlyActive="yes"
        />
      </div>
    </div>
  );
};

export default AllScholarshipList;

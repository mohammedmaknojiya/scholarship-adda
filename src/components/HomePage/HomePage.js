import React from "react";
import HomeCard from "./HomeCard/HomeCard";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <div className="home-title">
        <span className="home-title-text">Scholarship Adda</span>
      </div>
      <div className="card-list">
        <HomeCard title="All Scholarship List" btnText="See List" />
        <HomeCard title="Add New Scholarship" btnText="Add New" />
      </div>
      <br />
    </div>
  );
};

export default HomePage;

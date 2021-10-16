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
        <HomeCard
          title="All Scholarship List"
          btnText="See List"
          redirectUrl="/allSchList"
        />
        <HomeCard
          title="Add New Scholarship"
          btnText="Add New"
          redirectUrl="/addSch"
        />
      </div>
      <br />
    </div>
  );
};

export default HomePage;

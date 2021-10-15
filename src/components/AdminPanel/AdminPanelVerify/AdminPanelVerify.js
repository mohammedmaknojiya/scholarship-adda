import React from "react";
import VerifyCard from "./VerifyCard/VerifyCard";
import "./AdminPanelVerify.css";

const AdminPanelVerify = () => {
  return (
    <div className="main-verify-container">
      <span className="verify-title">Approve / Dis-Approve Scholarship</span>

      <div className="search-sch">
        <input type="text" placeholder="Search Scholarship" />
      </div>
      <div className="verify-container">
        <VerifyCard />
      </div>
    </div>
  );
};

export default AdminPanelVerify;

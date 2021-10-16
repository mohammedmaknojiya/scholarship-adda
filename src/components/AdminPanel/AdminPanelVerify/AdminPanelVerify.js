import React from "react";
import VerifyCard from "./VerifyCard/VerifyCard";
import "./AdminPanelVerify.css";
import { useHistory } from "react-router";
const AdminPanelVerify = () => {
  const history = useHistory();
  return (
    <div className="main-verify-container">
      <span className="verify-title">Approve / Dis-Approve Scholarship</span>
      <button
        className="admin-panel-button"
        onClick={() => history.push("/adminPanel")}
      >
        {" "}
        {"<<< Admin Panel"}
      </button>
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

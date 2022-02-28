import React from "react";
import VerifyCard from "./VerifyCard/VerifyCard";
import "./AdminPanelVerify.css";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const AdminPanelVerify = () => {
  const history = useHistory();
  const verifyListData = useSelector((state) => state.RequestReducer.reqData);
  const verfList = verifyListData.map((obj) => {
    return <VerifyCard key={obj.sch_id} id={obj.sch_id} name={obj.sch_name} />;
  });

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
      <div className="verify-container">{verfList}</div>
    </div>
  );
};

export default AdminPanelVerify;

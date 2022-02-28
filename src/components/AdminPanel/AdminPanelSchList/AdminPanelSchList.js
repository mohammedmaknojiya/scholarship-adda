import React from "react";
import "./AdminPanelSchList.css";
import StatusCard from "./StatusCard/StatusCard";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const AdminPanelSchList = () => {
  const history = useHistory();
  const schListData = useSelector((state) => state.Reducer.data);

  const schList = schListData.map((obj) => {
    return <StatusCard key={obj.sch_id} id={obj.sch_id} name={obj.sch_name} />;
  });
  return (
    <div className="main-status-container">
      <span className="status-title">Change Scholarship Status</span>
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
      <div className="status-container">{schList}</div>
    </div>
  );
};

export default AdminPanelSchList;

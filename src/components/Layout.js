import React from "react";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import AllScholarshipList from "./AllScholarshipList/AllScholarshipList";
import SingleScholarship from "./SingleScholarship/SingleScholarship";
import AddScholarship from "./AddScholarship/AddScholarship";
import AdminPanelSchList from "./AdminPanel/AdminPanelSchList/AdminPanelSchList";
import AdminPanelVerify from "./AdminPanel/AdminPanelVerify/AdminPanelVerify";
import SignUp from "./AuthenticationModule/SignUp/SignUp";
import Login from "./AuthenticationModule/Login/Login";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout-items">
      <NavBar />
      <div className="layout-body">
        {/* <HomePage /> */}
        {/* <AllScholarshipList /> */}
        {/* <SingleScholarship /> */}
        {/* <AddScholarship /> */}
        {/* <AdminPanelSchList /> */}
        {/* <AdminPanelVerify /> */}
        {/* <SignUp /> */}
        <Login />
      </div>

      <div className="layout-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

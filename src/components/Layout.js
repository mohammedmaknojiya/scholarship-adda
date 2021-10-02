import React from "react";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout-items">
      <NavBar />
      <div className="layout-body">
        <HomePage />
      </div>

      <div className="layout-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

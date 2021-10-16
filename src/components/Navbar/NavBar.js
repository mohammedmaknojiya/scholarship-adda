import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__logo">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div className="nav-bar__links">
        <Link className="nav-bar__link" to="/login">
          Login
        </Link>
        <Link className="nav-bar__link" to="/signup">
          New Register
        </Link>
        <Link className="nav-bar__link" to="/faq">
          FAQ's
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__logo">
        <h1>Logo</h1>
      </div>
      <div className="nav-bar__links">
        <a className="nav-bar__link" href="..">
          Login
        </a>
        <a className="nav-bar__link" href="..">
          New Register
        </a>
        <a className="nav-bar__link" href="..">
          FAQ's
        </a>
      </div>
    </div>
  );
};

export default NavBar;

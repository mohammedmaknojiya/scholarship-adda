import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Candidates can contact the Help Desk for resolution of the problems</p>
      <div>
        <div className="footer-item">
          <img
            className="footer-icon"
            src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png"
            alt="contact icon"
          />
          <span>
            <strong>Contact Number:</strong> 01-1234-5678
          </span>
        </div>
        <div className="footer-item">
          <img
            className="footer-icon"
            src="https://img.icons8.com/pastel-glyph/64/000000/email--v1.png"
            alt="email icon"
          />
          <span>
            <strong>Email Id:</strong> abc@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

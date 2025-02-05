import React from "react";
import "../../pages/LoginSignup/LoginSignup.css"
import logo from "../../images/onlylogo.png";

const LogInContainer = ({ title, children }) => {
  return (
    <div className="loginsignup-container">
      <div className="logo">
        <img src={logo} alt="only-logo" />
        <h2 className="loginsignup-title">{title}</h2>
      </div>
      <div className="loginsignup-frame">{children}</div>
    </div>
  );
};

export default LogInContainer;

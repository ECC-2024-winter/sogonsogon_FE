import React from "react";
import "../../../pages/LoginSignup/LoginSignup.css"

const Button = ({ text, onClick, disabled }) => {
  return (
    <button className="button-login" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;

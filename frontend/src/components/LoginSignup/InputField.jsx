import React from "react";
import "../../pages/LoginSignup/LoginSignup.css"

const InputField = ({ label, type, value, onChange}) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;

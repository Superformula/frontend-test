import React from "react";
import "./checkbox.scss";
import checkOn from "../../assets/check.svg";
import checkOff from "../../assets/no-check.svg";

export default ({ label, checked, ...rest }) => {
  return (
    <div className="checkbox-container">
         {checked && <img className="checkicon" alt="Checked" src={checkOn} />}
         {!checked && <img className="checkicon" alt="Not Checked" src={checkOff} />}
        <input
          type="checkbox"
          checked={checked}
          className="checkbox"
          id={label}
          {...rest}
        />
        <label htmlFor={label} className="checkbox-label">{label}</label>
    </div>
  );
};

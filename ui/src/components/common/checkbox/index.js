import React from "react";
import "./checkbox.scss";
import checked from "../../assets/check.svg";
import nochecked from "../../assets/no-check.svg";

export default ({ label, checked, ...rest }) => {
  return (
    <div className="checkbox-container">
         {checked && <img className="checkicon" alt="Checked" src={checked} />}
         {!checked && <img className="checkicon" alt="Not Checked" src={nochecked} />}
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

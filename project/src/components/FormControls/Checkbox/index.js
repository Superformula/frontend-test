import React from "react";
import PropTypes from 'prop-types';
require("./main.scss");

const CheckBox = ({ label, onChange, checked }) => {
  return (
    <span className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={checked === "true"}
          onChange={e => onChange(e.target.checked.toString())}
        />
        {label}
      </label>
    </span>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.string.isRequired // TODO: one of, true, false
}

export default CheckBox;

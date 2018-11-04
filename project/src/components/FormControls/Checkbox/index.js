import React from "react";
import PropTypes from 'prop-types';
require("./main.scss");

const CheckBox = ({ label, onChange }) => {
  return (
    <span className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          onChange={e => onChange(e.target.checked)}
        />
        {label}
      </label>
    </span>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CheckBox;

import React from "react";
import PropTypes from "prop-types";
require("./main.scss");

const Select = ({ onChange, placeholder, options }) => {
  return (
    <span className="select-wrapper">
      <label>
        <select defaultValue="" onChange={e => onChange(e.target.value)}>
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((o, i) => (
            <option key={o + i} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
    </span>
  );
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Select;

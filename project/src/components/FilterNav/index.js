import React from "react";

import FlatButton from "components/FlatButton";
import CheckBox from "components/FormControls/CheckBox"

require("./main.scss");

const FilterNav = ({ setPrice, setOpenNow, setCategory }) => {
  return (
    <div className="filter-nav">
      <div className="controls">
        <span>Filter By:</span>

        <CheckBox 
          label="Open Now"
          onChange={setOpenNow}
        /> 
        
        <select defaultValue="" onChange={e => setPrice(e.target.value)}>
          <option value="" disabled hidden>
            Price
          </option>
          <option value={"All"}>All</option>
          <option value={"$"}>$</option>
          <option value={"$$"}>$$</option>
          <option value={"$$$"}>$$$</option>
          <option value={"$$$$"}>$$$$</option>
        </select>

        <select defaultValue="" onChange={e => setCategory(e.target.value)}>
          <option value="" disabled hidden>
            Categories
          </option>
          <option value={"Italian"}>Italian</option>
          <option value={"Seafood"}>Seafood</option>
          <option value={"Steakhouses"}>Steakhouses</option>
          <option value={"Japanese"}>Japanese</option>
          <option value={"American"}>American</option>
          <option value={"Mexican"}>Mexican</option>
          <option value={"Thai"}>Thai</option>
        </select>

      </div>

      <FlatButton>Clear All</FlatButton>
    </div>
  );
};

export default FilterNav;

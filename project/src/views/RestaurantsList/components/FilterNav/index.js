import React from "react";

import FlatButton from "components/FlatButton";
import CheckBox from "components/FormControls/CheckBox"
import Select from "components/FormControls/Select"

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
        <Select 
          onChange={setPrice}
          placeholder="Price"
          options={["All", "$", "$$", "$$$", "$$$$"]}
        />
        <Select 
          onChange={setCategory}
          placeholder="Categories"
          options={["Italian", "Seafood", "Steakhouses", "Japanese", "American", "Mexican", "Thai"]}
        />
      </div>

      <FlatButton>Clear All</FlatButton>
    </div>
  );
};

export default FilterNav;

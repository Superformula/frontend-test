import React, { useContext } from "react";

import { AppContext } from "AppContext";
import FlatButton from "components/FlatButton";
import CheckBox from "components/FormControls/CheckBox";
import Select from "components/FormControls/Select";

require("./main.scss");

const FilterNav = () => {
  const appContext = useContext(AppContext);

  const {
    setPrice,
    setOpenNow,
    setCategory,
    clearAll,
    location,
    openNow,
    price,
    category
  } = appContext;

  return (
    <div className="filter-nav">
      <div className="controls">
        <span>Filter By:</span>
        <CheckBox 
          label="Open Now" 
          onChange={setOpenNow} 
          checked={openNow}
        />
        <Select
          onChange={setPrice}
          placeholder="Price"
          options={["All", "$", "$$", "$$$", "$$$$"]}
        />
        <Select
          onChange={setCategory}
          placeholder="Categories"
          options={[
            "Italian",
            "Seafood",
            "Steakhouses",
            "Japanese",
            "American",
            "Mexican",
            "Thai"
          ]}
        />
      </div>

      <FlatButton onClick={clearAll}>Clear All</FlatButton>
    </div>
  );
};

export default FilterNav;

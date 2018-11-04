import React from "react";
require("./main.css");

const FilterNav = ({ setPrice, setOpenNow, setCategory }) => {
  return (
    <div className="filter-nav">
      <div>
        Filter By:
        <input
          type="checkbox"
          onChange={e => setOpenNow(e.target.checked)}
        />{" "}
        Open Now

        -----

        
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

        -----

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

      <button>Clear All</button>
    </div>
  );
};

export default FilterNav;

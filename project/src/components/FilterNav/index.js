import React from "react";
require("./main.css");

const FilterNav = props => {
  return (
    <div className="filter-nav">
      <div>
        Filter By:

        <input type="checkbox" /> Open Now

        <select>
          <option>Price</option>
        </select>

        <select>
          <option>Categories</option>
        </select>

      </div>

      <button>Clear All</button>
    </div>
  );
};

export default FilterNav;

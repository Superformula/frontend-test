import React from "react";

import FilterNav from "components/FilterNav";
require("./main.css");

const RestaurantsList = () => {
  return (
    <div>
      <div className="top-section">
        <h1>Restaurants</h1>
        <p>
          Green juice mustache adaptogen air plant single-origin coffee. <br />
          Beard yuccie succulents listicle, pickled gluten-free shaman YOLO
          intelligentsia occupy.
        </p>
      </div>
      <FilterNav />

      <div className="grid">
        <div className="item" />
      </div>
    </div>
  );
};

export default RestaurantsList;
import React, { useContext } from "react";
import { AppContext } from "AppContext";

import FilterNav from "components/FilterNav";
require("./main.css");

const RestaurantsList = () => {
  const appContext = useContext(AppContext);
  const { setPrice, setOpenNow, setCategory } = appContext;
  console.log(appContext);

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

      <FilterNav 
        setPrice={setPrice} 
        setOpenNow={setOpenNow}
        setCategory={setCategory}
      />

      <div className="grid">
        <div className="item" />
      </div>
    </div>
  );
};

export default RestaurantsList;

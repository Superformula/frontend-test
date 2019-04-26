import React from "react";
import ReactDOM from "react-dom";
import RestaurantsContainer from "./js/components/RestaurantsContainer.jsx";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<RestaurantsContainer />, wrapper) : false;

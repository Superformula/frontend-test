import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App/App";

import "./scss/main.scss";

const Root = (
  // This will change over time for Provider
  <App />
);

ReactDOM.render(Root, document.getElementById("root"));

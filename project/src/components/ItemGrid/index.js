import React from "react";
require("./main.css");

export const Grid = ({ children }) => {
  return <div className="grid">{children}</div>;
};

export const Item = ({ children }) => {
  return <div className="item">{children}</div>;
};

import React from "react";
require("./main.scss");

export const Grid = ({ children }) => {
  return <div className="grid">{children}</div>;
};

export const Item = ({ children }) => {
  return <div className="item">{children}</div>;
};

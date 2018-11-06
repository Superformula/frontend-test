import React from "react";
require("./main.scss");

export const OpenNow = () => {
  return (
    <span>
      <span className="green-dot" /> OPEN NOW
    </span>
  );
};

export const Closed = () => {
  return (
    <span>
      <span className="red-dot" /> CLOSED
    </span>
  );
};
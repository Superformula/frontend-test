import React from "react";
require("./main.scss");

const PaddedSection = ({ children }) => {
  return <div className="padded-section">{children}</div>;
};

export default PaddedSection;

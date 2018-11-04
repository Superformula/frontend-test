import React from "react";
import PropTypes from "prop-types";

require("./main.scss");

const FlatButton = ({ children, theme, fullWidth }) => {
  const classnames = [
    "flat-button",
    theme === "dark" && "dark",
    !!fullWidth && "fullwidth"
  ]
    .filter(Boolean)
    .join(" ");

  return <button className={classnames}>{children}</button>;
};

FlatButton.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
  fullWidth: PropTypes.bool
};

export default FlatButton;

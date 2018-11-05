import React from "react";
import PropTypes from "prop-types";

require("./main.scss");

const FlatButton = ({ children, theme, fullWidth, onClick }) => {
  const classnames = [
    "flat-button",
    theme === "dark" && "dark",
    !!fullWidth && "fullwidth"
  ]
    .filter(Boolean)
    .join(" ");

  return <button className={classnames} onClick={onClick}>{children}</button>;
};

FlatButton.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func
};

FlatButton.defaultProps = {
  onClick: () => {}
}

export default FlatButton;

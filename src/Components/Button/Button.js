import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Button.scss";

const Button = props => {
  const { children, inverted, onClick } = props;

  const classes = classNames({
    button: true,
    inverted: inverted
  });

  return <button className={classes} onClick={onClick}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string,
  inverted: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  inverted: false
};

export default Button;

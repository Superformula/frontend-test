import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Button.scss";

const Button = props => {
  const { inverted, children } = props;

  const classes = classNames({
    button: true,
    inverted: inverted
  });

  return <button className={classes}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string,
  inverted: PropTypes.bool
};

Button.defaultProps = {
  inverted: false
};

export default Button;

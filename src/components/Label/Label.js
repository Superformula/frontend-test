import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Label.scss";

const Label = props => {
  const { children, divider, large } = props;

  const classes = classNames({
    label: true,
    "label-content--large": large
  });

  return (
    <label className={classes}>
      {children}
      {divider && <span className="label-divider">•</span>}
    </label>
  );
};

Label.prototypes = {
  children: PropTypes.string,
  divider: PropTypes.bool,
  large: PropTypes.bool
};

Label.defaultProps = {
  large: false
};

export default Label;

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Heading.scss";

const Heading = props => {
  const { children, level, light } = props;

  const Heading = `h${level}`;

  const headingClasses = classNames({
    heading: true,
    light: light
  });

  return <Heading className={headingClasses}>{children}</Heading>;
};

Heading.propTypes = {
  children: PropTypes.string,
  level: PropTypes.number,
  style: PropTypes.string
};

export default Heading;

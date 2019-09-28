import React from "react";

import "./Paragraph.scss";
import PropTypes from "prop-types";

const Paragraph = props => <p className="paragraph">{props.children}</p>;

Paragraph.propTypes = {
  children: PropTypes.string
};

export default Paragraph;

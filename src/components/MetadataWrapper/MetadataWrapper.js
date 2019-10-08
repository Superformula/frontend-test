import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Label from "../Label/Label";
import Status from "../Status/Status";

import "./MetadataWrapper.scss";

const MetadataWrapper = props => {
  const { category, status, price, large } = props;
  let isLarge = large;

  return (
    <div className="metadata-wrapper">
      <div className="metadata-label-container">
        <Label divider large={isLarge}>{category}</Label>
        <Label large={isLarge}>{price}</Label>
      </div>
      <div className="metadata-status-container">
        <Status status={status} large={isLarge} />
      </div>
    </div>
  );
};

MetadataWrapper.propTypes = {
  status: PropTypes.bool,
  category: PropTypes.string,
  large: PropTypes.bool,
  price: PropTypes.string
};

MetadataWrapper.defaultProps = {
  large: false
};
export default MetadataWrapper;

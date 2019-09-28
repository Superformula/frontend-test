import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Status.scss";

const Status = props => {
  const { large, status } = props;

  const wrapperClasses = classNames({
    "status-wrapper": true,
    "status-content--large": large
  });

  const indicatorClasses = classNames({
    "status-indicator": true,
    "status-indicator--open": status,
    "status-indicator--closed": !status
  });

  return (
    <div className={wrapperClasses}>
      <span className={indicatorClasses} />
      <label className="status-text"> {status ? "Open Now" : "Closed"} </label>
    </div>
  );
};

Status.propTypes = {
  large: PropTypes.string,
  status: PropTypes.bool
};

Status.defaultProps = {
  large: false
};

export default Status;

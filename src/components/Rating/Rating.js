import React from "react";
import PropTypes from "prop-types";
import "./Rating.scss";

const Rating = props => {
  const { rating } = props;

  return (
    <ul className="rating-list" data-rating={rating}>
      <li className="rating-list-item"></li>
      <li className="rating-list-item"></li>
      <li className="rating-list-item"></li>
      <li className="rating-list-item"></li>
      <li className="rating-list-item"></li>
    </ul>
  );
};

Rating.propTypes = {
  rating: PropTypes.number
};

export default Rating;

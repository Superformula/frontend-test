import React from 'react';
import PropTypes from 'prop-types';
import { Star } from './Star';
import { Wrapper } from './Wrapper';

export const Rating = ({ rating, max, $xs, $lg }) => {
  const baseStars = new Array(max || 5).fill(null);
  const ratingStars = baseStars.map((_, index) => (
    <Star key={index} $fill={rating >= index + 1} />
  ));
  return <Wrapper {...{ $xs, $lg }}>{ratingStars}</Wrapper>;
};

Rating.displayName = 'Rating';

Rating.propTypes = {
  rating: PropTypes.number,
  max: PropTypes.number,
  $xs: PropTypes.bool,
  $lg: PropTypes.bool,
};

Rating.defaultProps = {
  rating: 0,
  max: 5,
  $xs: false,
  $lg: false,
};

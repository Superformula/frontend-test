import React from 'react';
import PropTypes from 'prop-types';
import { Star } from './Star';
import { Wrapper } from './Wrapper';

export const Rating = ({ rating, max }) => {
  const baseStars = new Array(max || 5).fill(null);
  const ratingStars = baseStars.map((_, index) => (
    <Star fill={rating >= index + 1} />
  ));
  return <Wrapper>{ratingStars}</Wrapper>;
};

Rating.displayName = 'Rating';

Rating.propTypes = {
  rating: PropTypes.number,
  max: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
  max: 5,
};

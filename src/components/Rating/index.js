import React, { useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as HalfStar } from 'assets/star-half.svg';
import { Star } from './Star';
import { Wrapper } from './Wrapper';

export const Rating = memo(({ rating, max, $xs, $lg }) => {
  const baseStars = new Array(max || 5).fill(null);
  const ratingStars = useMemo(
    () =>
      baseStars.map((_, index) => {
        const isFull = rating >= index + 1;
        const isHalf = Math.abs(index + 1 - rating) < 1;
        return <Star key={index} $fill={isFull} as={isHalf ? HalfStar : ''} />;
      }),
    [rating]
  );

  return <Wrapper {...{ $xs, $lg }}>{ratingStars}</Wrapper>;
});

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

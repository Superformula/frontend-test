import React, { FC } from 'react';
import classNames from 'classnames';

import { Star } from './Star/Star';
import { StarRatingProps } from './StarRating.types';
import { Size } from './Star/Star.types';
import './StarRating.scss';

const MAX_STARS_AMOUNT = 5;

/**
 * Represents rate from 0 to 5 stars
 */
export const StarRating: FC<StarRatingProps> & { size: typeof Size } = ({ rating, className, size = Size.SMALL }) => (
  <div className={classNames('star-rating', className)}>
    {Array(MAX_STARS_AMOUNT)
      .fill(null)
      .map((_, currentStarIndex) => {
        const result = rating - currentStarIndex;

        if (result >= 1) {
          return <Star key={currentStarIndex} variant={Star.variant.FULL} size={size} />;
        }

        if (result > 0) {
          return <Star key={currentStarIndex} variant={Star.variant.HALF} size={size} />;
        }

        return <Star key={currentStarIndex} variant={Star.variant.EMPTY} size={size} />;
      })}
  </div>
);

StarRating.size = Size;

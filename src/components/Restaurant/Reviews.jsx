import React from 'react';
import { array, number } from 'prop-types';

import Restaurant from 'components/Restaurant';

export default function Reviews(props) {
  const { review_count, reviews } = props;
  return (
    <div className="reviews">
      <div className="reviews">
        <h6 className="reviews__heading">
          {review_count}
          &nbsp;Reviews
        </h6>
        <div className="reviews__items">
          {reviews.map(review => (
            <Restaurant.Review key={review.id} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}

Reviews.propTypes = {
  review_count: number,
  reviews: array,
};

Reviews.defaultProps = {
  reviews: [],
  review_count: 0,
};

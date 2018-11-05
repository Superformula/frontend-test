import React from 'react';
import { number, string, object } from 'prop-types';

import Stars from 'components/Stars';

export default function Review(props) {
  const {
    time_created,
    text,
    rating,
    user: { name, image_url },
  } = props;

  return (
    <div className="review">
      <div className="review-meta">
        <figure
          className="review-meta__avatar"
          style={{ backgroundImage: `url(${image_url})` }}
        />
        <div className="review-meta__name">
          <strong>{name}</strong>
          <em>{time_created}</em>
          {/* TODO: Properly format date */}
        </div>
      </div>
      <div className="review__content">
        <Stars rating={rating} />
        <p>{text}</p>
      </div>
    </div>
  );
}

Review.propTypes = {
  time_created: string.isRequired,
  rating: number.isRequired,
  text: string.isRequired,
  user: object.isRequired,
};

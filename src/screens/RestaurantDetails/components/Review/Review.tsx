import React, { FC } from 'react';

import './Review.scss';
import { StarRating } from 'shared/components/StarRating/StarRating';
import { ReviewProps } from './Review.types';

export const Review: FC<ReviewProps> = ({ reviewerAvatar, reviewerName, dateCreated, rating, comment }) => (
  <article className="review">
    <div className="review__reviewer-details">
      <img className="review__reviewer-avatar" alt="reviewer face" src={reviewerAvatar} />
      <div className="review__reviewer-info">
        <p className="review__reviewer-name">{reviewerName}</p>
        <p className="review__date">{dateCreated}</p>
      </div>
    </div>
    <div className="review__details">
      <StarRating rating={rating} />
      <p className="review__comment">{comment}</p>
    </div>
  </article>
);

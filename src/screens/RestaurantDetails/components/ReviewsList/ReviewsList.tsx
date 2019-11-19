import React, { FC } from 'react';

import { Review } from '../Review/Review';

import { Grid } from 'shared/components/Grid/Grid';
import './ReviewsList.scss';
import { ReviewsListProps } from './ReviewsList.types';

export const ReviewsList: FC<ReviewsListProps> = ({ reviews }) => (
  <Grid.Row>
    <main className="reviews-list">
      <h3 className="reviews-list__amount-header">321 Reviews</h3>
      {reviews.map((review, i) => (
        <Review key={i} {...review} />
      ))}
    </main>
  </Grid.Row>
);

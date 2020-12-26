import React from 'react';
import { DICTIONARY } from 'consts/dictionary';
import { GridWrapper } from '../GridWrapper';
import { Paragraph } from '../Paragraph';
import { Review } from '../Review';

export const Reviews = ({ reviewCount, reviews }) => (
  <GridWrapper>
    <Paragraph bottomSpaced>
      {reviewCount} {DICTIONARY.REVIEWS}
    </Paragraph>
    {reviews?.map(review => (
      <Review key={review.text} {...review} />
    ))}
  </GridWrapper>
);

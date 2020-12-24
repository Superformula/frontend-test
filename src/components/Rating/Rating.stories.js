import React from 'react';
import { Rating } from '.';

export const Default = args => <Rating {...args} />;
Default.args = { rating: 3, max: 5, $xs: false, $lg: false };

export default {
  title: 'Rating',
  component: Rating,
};

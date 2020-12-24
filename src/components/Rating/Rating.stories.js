import React from 'react';
import { Rating } from '.';

export const Default = args => <Rating {...args} />;
Default.args = { rating: 3, max: 5 };

export default {
  title: 'Rating',
  component: Rating,
};

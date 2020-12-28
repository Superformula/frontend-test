import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Review, ReviewProps } from './Review';

export default {
  title: 'molecules/Review',
  component: Review,
} as Meta;

const Template: Story<ReviewProps> = (args) => <Review {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatarUrl: 'http://via.placeholder.com/500',
  user: 'Brian B.',
  date: '10/9/2018',
  rating: 4,
  text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt maiores odio, nobis inventore eum a iste necessitatibus dignissimos distinctio corrupti.',
  showSeparator: true,
};

export const NoSeparator = Template.bind({});
NoSeparator.args = {
  avatarUrl: 'http://via.placeholder.com/500',
  user: 'Brian B.',
  date: '10/9/2018',
  rating: 4,
  text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt maiores odio, nobis inventore eum a iste necessitatibus dignissimos distinctio corrupti.',
  showSeparator: false,
};

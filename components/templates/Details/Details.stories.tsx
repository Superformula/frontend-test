import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Details, DetailsProps, ReviewData } from './Details';

export default {
  title: 'templates/Details',
  component: Details,
} as Meta;

const Template: Story<DetailsProps> = (args) => <Details {...args} />;

const reviews: ReviewData[] = [{
  avatarUrl: 'http://via.placeholder.com/80',
  user: 'Brian B.',
  date: '10/9/2018',
  text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt maiores odio, nobis inventore eum a iste necessitatibus dignissimos distinctio corrupti.',
  rating: 3.5,
}, {
  avatarUrl: 'http://via.placeholder.com/80',
  user: 'Mary M.',
  date: '10/9/2018',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta similique dolores, corporis totam error itaque nemo?',
  rating: 4,
}, {
  avatarUrl: 'http://via.placeholder.com/80',
  user: 'Kate K.',
  date: '10/4/2018',
  text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi saepe omnis voluptatibus a atque, unde eius, magnam commodi quos consequatur.',
  rating: 2.5,
}];

export const Default = Template.bind({});
Default.args = {
  address: '624 S La Brea Ave Los Angeles, CA 90036',
  title: 'Restaurant 3',
  rating: 3.5,
  category: 'Japanese',
  price: 3,
  status: 'open',
  imageUrl1: 'http://via.placeholder.com/500',
  imageUrl2: 'http://via.placeholder.com/500',
  totalReviews: 321,
  loading: false,
  reviews,
};

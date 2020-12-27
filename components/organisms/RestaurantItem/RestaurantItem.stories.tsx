import React from 'react';
import { Story, Meta } from '@storybook/react';

import { RestaurantItem, RestaurantItemProps } from './RestaurantItem';

export default {
  title: 'organisms/RestaurantItem',
  component: RestaurantItem,
} as Meta;

const Template: Story<RestaurantItemProps> = (args) => <RestaurantItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'http://via.placeholder.com/500',
  title: 'Restaurants 2',
  rating: 3.5,
  category: 'Seafood',
  price: 3,
  status: 'open',
};

export const Normal = Template.bind({});
Normal.args = {
  ...Default.args,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

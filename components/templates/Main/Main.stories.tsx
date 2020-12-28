import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Main, MainProps, RestaurantItemData } from './Main';
import { SelectOption } from '~/components/molecules';

export default {
  title: 'templates/Main',
  component: Main,
} as Meta;

const priceOptions: SelectOption[] = [{
  id: 'all',
  text: 'All',
}, {
  id: '1',
  text: '$',
}, {
  id: '2',
  text: '$$',
}, {
  id: '3',
  text: '$$$',
}, {
  id: '4',
  text: '$$$$',
}];

const categoryOptions: SelectOption[] = [{
  id: 'all',
  text: 'All',
}, {
  id: 'italian',
  text: 'Italian',
}, {
  id: 'seafood',
  text: 'Seafood',
}, {
  id: 'steakhouses',
  text: 'Steakhouses',
}, {
  id: 'japanese',
  text: 'Japanese',
}, {
  id: 'american',
  text: 'American',
}, {
  id: 'mexican',
  text: 'Mexican',
}, {
  id: 'thai',
  text: 'Thai',
}];

const items: RestaurantItemData[] = [{
  id: '1',
  imageUrl: 'http://via.placeholder.com/500',
  title: 'Very Long Name Restaurants Number 1 In List',
  rating: 4,
  category: 'Thai',
  price: 2,
  status: 'closed',
}, {
  id: '2',
  imageUrl: 'http://via.placeholder.com/500',
  title: 'Restaurants 2',
  rating: 3.5,
  category: 'Seafood',
  price: 3,
  status: 'open',
}, {
  id: '3',
  imageUrl: 'http://via.placeholder.com/500',
  title: 'Restaurants 3',
  rating: 3.5,
  category: 'Japanese',
  price: 3,
  status: 'open',
}, {
  id: '4',
  imageUrl: 'http://via.placeholder.com/500',
  title: 'Restaurants 4',
  rating: 1,
  category: 'Mexican',
  price: 2,
  status: 'open',
}, {
  id: '5',
  imageUrl: 'http://via.placeholder.com/500',
  title: 'Restaurants 5',
  rating: 1,
  category: 'Japanese',
  price: 2,
  status: 'open',
}, {
  id: '6',
  imageUrl: 'http://via.placeholder.com/500',
  title: 'Restaurants 6',
  rating: 4.5,
  category: 'Seafood',
  price: 3,
  status: 'open',
}, {
  id: '7',
  imageUrl: 'http://via.placeholder.com/500',
  title: 'Restaurants 7',
  rating: 5,
  category: 'Japanese',
  price: 4,
  status: 'closed',
}, {
  id: '8',
  imageUrl: 'http://via.placeholder.com/500',
  title: 'Restaurants 8',
  rating: 1,
  category: 'Thai',
  price: 1,
  status: 'closed',
}, {
  id: '9',
  imageUrl: 'http://via.placeholder.com/500',
  title: 'Restaurants 9',
  rating: 2,
  category: 'Mexican',
  price: 1,
  status: 'open',
}];

const Template: Story<MainProps> = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Restaurants',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  priceOptions,
  categoryOptions,
  items,
  showLoadMore: true,
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Default.args,
  items: [],
};

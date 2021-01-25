import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Header from '@components/Header';
import RestaurantHeader from '@components/RestaurantHeader';

// This default export determines where your story goes in the story list
export default {
  title: 'Headers',
  component: Header,
};

const HomepageTemplate: Story<ComponentProps<typeof Header>> = (args) => (
  <Header {...args} />
);

export const Homepage = HomepageTemplate.bind({});

const RestaurantTemplate: Story<ComponentProps<typeof RestaurantHeader>> = (args) => (
  <RestaurantHeader {...args} />
);

export const Restaurant = RestaurantTemplate.bind({});
Restaurant.args = {
  name: "Restaurant 3",
  rating: 3.5, 
  is_closed: true, 
  price: "$$$",
  category: "Japanese"
};
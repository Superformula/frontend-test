import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Showcase from '@components/Showcase';

export default {
  title: 'Showcase',
};

const ShowcaseTemplate: Story<ComponentProps<typeof Showcase>> = (args) => (
  <Showcase {...args} />
);


export const RestauransList = ShowcaseTemplate.bind({});

RestauransList.args = {
  title: "Showcase",
  isLoading: false,
  list: [
    {
      name: "Very Long Name Restaurants Number 1 In List",
      is_closed: false,
      rating: 4,
      price: "$$$$",
      categories: [
        {
          alias: "thai",
          title: "Thai"
        }
      ],
      photos: [""]
    },
    {
      name: "Restaurants 2",
      is_closed: true,
      rating: 3,
      price: "$",
      categories: [
        {
          alias: "seafood",
          title: "Seafood"
        }
      ],
      photos: [""]
    },
    {
      name: "Restaurants 3",
      is_closed: false,
      rating: 3.5,
      price: "$",
      categories: [
        {
          alias: "seafood",
          title: "Seafood"
        }
      ],
      photos: [""]
    },
    {
      name: "Restaurants 4",
      is_closed: false,
      rating: 3.5,
      price: "$",
      categories: [
        {
          alias: "seafood",
          title: "Seafood"
        }
      ],
      photos: [""]
    },
    {
      name: "Restaurants 5",
      is_closed: true,
      rating: 4.5,
      price: "$",
      categories: [
        {
          alias: "seafood",
          title: "Seafood"
        }
      ],
      photos: [""]
    },
    {
      name: "Restaurants 6",
      is_closed: true,
      rating: 4,
      price: "$",
      categories: [
        {
          alias: "seafood",
          title: "Seafood"
        }
      ],
      photos: [""]
    },
    {
      name: "Restaurants 7",
      is_closed: false,
      rating: 3,
      price: "$",
      categories: [
        {
          alias: "seafood",
          title: "Seafood"
        }
      ],
      photos: [""]
    },
    {
      name: "Restaurants 8",
      is_closed: true,
      rating: 3,
      price: "$",
      categories: [
        {
          alias: "seafood",
          title: "Seafood"
        }
      ],
      photos: [""]
    },
  ],
};
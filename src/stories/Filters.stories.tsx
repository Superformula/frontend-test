import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Filters from '@components/Filters';

export default {
  title: 'Filters',
};

const FiltersTemplate: Story<ComponentProps<typeof Filters>> = (args) => (
  <Filters {...args} />
);


export const Bar = FiltersTemplate.bind({});

Bar.args = {
  list: [
    {
      id: "price",
      text: "Price",
      values: [
        {
          alias: "option1",
          title: "Option 1"
        },
        {
          alias: "option2",
          title: "Option 2"
        },
        {
          alias: "option3",
          title: "Option 3"
        }
      ] 
    },
    {
      id: "categories",
      text: "Categories",
      values: [
        {
          alias: "option1",
          title: "Option 1"
        },
        {
          alias: "option2",
          title: "Option 2"
        },
        {
          alias: "option3",
          title: "Option 3"
        }
      ] 
    }
  ]
};
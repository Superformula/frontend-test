import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CategoryStatus, CategoryStatusProps } from './CategoryStatus';

export default {
  title: 'molecules/CategoryStatus',
  component: CategoryStatus,
  argTypes: {
    price: {
      control: {
        type: 'range',
        min: 1,
        max: 4,
        step: 1,
      },
    },
  },
} as Meta;

const Template: Story<CategoryStatusProps> = (args) => <CategoryStatus {...args} />;

export const Default = Template.bind({});
Default.args = {
  category: 'TESTING CATEGORY',
};

export const PriceOne = Template.bind({});
PriceOne.args = {
  ...Default.args,
  price: 1,
};

export const PriceTwo = Template.bind({});
PriceTwo.args = {
  ...Default.args,
  price: 2,
};

export const PriceThree = Template.bind({});
PriceThree.args = {
  ...Default.args,
  price: 3,
};

export const PriceFour = Template.bind({});
PriceFour.args = {
  ...Default.args,
  price: 4,
};

export const NoCategory = Template.bind({});
NoCategory.args = {};

export const NoCategoryPriceOne = Template.bind({});
NoCategoryPriceOne.args = {
  price: 1,
};

export const NoCategoryPriceTwo = Template.bind({});
NoCategoryPriceTwo.args = {
  price: 2,
};

export const NoCategoryPriceThree = Template.bind({});
NoCategoryPriceThree.args = {
  price: 3,
};

export const NoCategoryPriceFour = Template.bind({});
NoCategoryPriceFour.args = {
  price: 4,
};

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Select, SelectOption, SelectProps } from './Select';

export default {
  title: 'molecules/Select',
  component: Select,
} as Meta;

const options: SelectOption[] = [{
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

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Categories',
  value: 'all',
  options,
};

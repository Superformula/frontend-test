import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SelectOption } from '~/components/molecules';
import { Filter, FilterProps } from './Filter';

export default {
  title: 'organisms/Filter',
  component: Filter,
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

const Template: Story<FilterProps> = (args) => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
  priceOptions,
  categoryOptions,
};

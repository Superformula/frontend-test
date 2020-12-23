import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Select, SelectProps } from './Select';

export default {
  title: 'molecules/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {};

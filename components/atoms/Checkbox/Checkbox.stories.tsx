import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'atoms/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Checkbox Button',
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  ...Default.args,
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};

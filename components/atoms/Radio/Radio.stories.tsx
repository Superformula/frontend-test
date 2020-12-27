import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Radio, RadioProps } from './Radio';

export default {
  title: 'atoms/Radio',
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Radio Button',
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

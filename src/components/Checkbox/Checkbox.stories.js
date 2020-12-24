import React from 'react';
import { Checkbox } from './';

const Template = args => <Checkbox {...args}>Click me!</Checkbox>;

export const Default = Template.bind({});
Default.args = { id: 'checkbox-1' };

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: { onChange: { action: 'clicked' } },
};

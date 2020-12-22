import React from 'react';
import { Button } from './';

const Template = args => <Button {...args}>Click me!</Button>;

export const Primary = Template.bind({});
Primary.args = { secondary: false };

export const Secondary = Template.bind({});
Secondary.args = { secondary: true };

export default {
  title: 'Button',
  component: Button,
};

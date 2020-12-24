import React from 'react';
import { Button } from './';

const Template = args => <Button {...args}>Click me!</Button>;

export const Default = Template.bind({});
Default.args = { secondary: false, disabled: false };

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

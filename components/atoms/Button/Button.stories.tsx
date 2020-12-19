import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  color: 'secondary',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
  color: 'secondary',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Default.args,
  size: 'full-width',
  color: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

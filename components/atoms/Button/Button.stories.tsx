import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Click Me',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  color: 'secondary',
};

export const Small = Template.bind({});
Small.args = {
  ...Primary.args,
  size: 'small',
  color: 'secondary',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Primary.args,
  size: 'full-width',
  color: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

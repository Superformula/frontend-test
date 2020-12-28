import React from 'react';
import { Story, Meta } from '@storybook/react';

import { OpenStatus, OpenStatusProps } from './OpenStatus';

export default {
  title: 'molecules/OpenStatus',
  component: OpenStatus,
} as Meta;

const Template: Story<OpenStatusProps> = (args) => <OpenStatus {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'open',
};

export const SizeNormal = Template.bind({});
SizeNormal.args = {
  ...Default.args,
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  ...Default.args,
  large: true,
};

export const Open = Template.bind({});
Open.args = {
  status: 'open',
};

export const Closed = Template.bind({});
Closed.args = {
  status: 'closed',
};

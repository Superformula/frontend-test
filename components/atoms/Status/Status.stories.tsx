import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Status, StatusProps } from './Status';

export default {
  title: 'atoms/Status',
  component: Status,
} as Meta;

const Template: Story<StatusProps> = (args) => <Status {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'open',
};

export const Open = Template.bind({});
Open.args = {
  variant: 'open',
};

export const Closed = Template.bind({});
Closed.args = {
  variant: 'closed',
};

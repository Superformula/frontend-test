import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Avatar, AvatarProps } from './Avatar';

export default {
  title: 'atoms/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'http://via.placeholder.com/80',
  alt: 'placeholder image',
};

export const Loading = Template.bind({});
Loading.args = {};

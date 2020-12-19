import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Star, StarProps } from './Star';

export default {
  title: 'atoms/Star',
  component: Star,
} as Meta;

const Template: Story<StarProps> = (args) => <Star {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  variant: 'empty',
};

export const Full = Template.bind({});
Full.args = {
  variant: 'full',
};

export const Half = Template.bind({});
Half.args = {
  variant: 'half',
};

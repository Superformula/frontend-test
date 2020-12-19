import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Rating, RatingProps } from './Rating';

export default {
  title: 'molecules/Rating',
  component: Rating,
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.5,
      },
    },
  },
} as Meta;

const Template: Story<RatingProps> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 0,
};

export const Zero = Template.bind({});
Zero.args = {
  value: 0,
};

export const ZeroPointFive = Template.bind({});
ZeroPointFive.args = {
  value: 0.5,
};

export const One = Template.bind({});
One.args = {
  value: 1,
};

export const OnePointFive = Template.bind({});
OnePointFive.args = {
  value: 1.5,
};

export const Two = Template.bind({});
Two.args = {
  value: 2,
};

export const TwoPointFive = Template.bind({});
TwoPointFive.args = {
  value: 2.5,
};

export const Three = Template.bind({});
Three.args = {
  value: 3,
};

export const ThreePointFive = Template.bind({});
ThreePointFive.args = {
  value: 3.5,
};

export const Four = Template.bind({});
Four.args = {
  value: 4,
};

export const FourPointFive = Template.bind({});
FourPointFive.args = {
  value: 4.5,
};

export const Five = Template.bind({});
Five.args = {
  value: 5,
};

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Typography, TypographyProps } from './Typography';

export default {
  title: 'atoms/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Title = Template.bind({});
Title.args = {
  variant: 'title',
  children: 'The quick brown fox jumps over the lazy dog.',
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  ...Title.args,
  variant: 'subtitle',
};

export const Headline = Template.bind({});
Headline.args = {
  ...Title.args,
  variant: 'headline',
};

export const Body = Template.bind({});
Body.args = {
  ...Title.args,
  variant: 'body',
};

export const Status = Template.bind({});
Status.args = {
  ...Title.args,
  variant: 'status',
};

export const Label = Template.bind({});
Label.args = {
  ...Title.args,
  variant: 'label',
};

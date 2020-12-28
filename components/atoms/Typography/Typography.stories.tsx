import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Typography, TypographyProps } from './Typography';

export default {
  title: 'atoms/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'The quick brown fox jumps over the lazy dog.',
};

export const Title = Template.bind({});
Title.args = {
  ...Default.args,
  variant: 'title',
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  ...Default.args,
  variant: 'subtitle',
};

export const Headline = Template.bind({});
Headline.args = {
  ...Default.args,
  variant: 'headline',
};

export const Body = Template.bind({});
Body.args = {
  ...Default.args,
  variant: 'body',
};

export const Body2 = Template.bind({});
Body2.args = {
  ...Default.args,
  variant: 'body2',
};

export const Status = Template.bind({});
Status.args = {
  ...Default.args,
  variant: 'status',
};

export const Status2 = Template.bind({});
Status2.args = {
  ...Default.args,
  variant: 'status2',
};

export const Label = Template.bind({});
Label.args = {
  ...Default.args,
  variant: 'label',
};

export const Span = Template.bind({});
Span.args = {
  ...Default.args,
  variant: 'span',
};

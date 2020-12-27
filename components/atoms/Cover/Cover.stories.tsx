import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Cover, CoverProps } from './Cover';

export default {
  title: 'atoms/Cover',
  component: Cover,
} as Meta;

const Template: Story<CoverProps> = (args) => (
  <div style={{ width: 400 }}>
    <Cover {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  src: 'http://via.placeholder.com/500',
  alt: 'placeholder image',
};

export const Loading = Template.bind({});
Loading.args = {};

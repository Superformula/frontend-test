import React from 'react';
import { H2 } from './';

export const Default = ({ content, ...args }) => <H2 {...args}>{content}</H2>;
Default.args = {
  content: 'Lorem ipsum',
};

export default {
  title: 'H2',
  component: H2,
};

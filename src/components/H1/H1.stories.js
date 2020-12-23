import React from 'react';
import { H1 } from './';

export const Default = ({ content, ...args }) => (
  <H1 {...args}>{content}</H1>
);
Default.args = {
  content: 'Lorem ipsum',
};

export default {
  title: 'H1',
  component: H1,
};

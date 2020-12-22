import React from 'react';
import { GenericLabel } from './';

export const Default = ({ content, ...args }) => (
  <GenericLabel {...args}>{content}</GenericLabel>
);
Default.args = {
  content: 'Lorem ipsum',
};

export default {
  title: 'Generic Label',
  component: GenericLabel,
};

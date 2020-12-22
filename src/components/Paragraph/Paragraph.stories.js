import React from 'react';
import { Paragraph } from './';

export const Default = ({ content, ...args }) => (
  <Paragraph {...args}>{content}</Paragraph>
);
Default.args = {
  content: 'Lorem ipsum dolor sit amet.',
};

export default {
  title: 'Paragraph',
  component: Paragraph,
};

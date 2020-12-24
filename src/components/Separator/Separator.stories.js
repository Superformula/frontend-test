import React from 'react';
import { Separator } from './';

export const Default = args => <Separator {...args}/>;
Default.args = { spaced: true };

export default {
  title: 'Separator',
  component: Separator,
};

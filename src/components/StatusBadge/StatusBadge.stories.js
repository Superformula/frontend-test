import React from 'react';
import { StatusBadge } from '.';

export const Default = args => <StatusBadge {...args} />;
Default.args = { isOpen: true };

export default {
  title: 'Status Badge',
  component: StatusBadge,
};

import React from 'react';
import { StatusIndicator } from '.';

export const Default = args => <StatusIndicator {...args} />;
Default.args = { isOpen: true };

export default {
  title: 'Status Indicator',
  component: StatusIndicator,
};

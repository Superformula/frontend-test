import React from 'react';
import { ToggleSwitch } from './';

const Template = args => <ToggleSwitch {...args}/>;

export const Default = Template.bind({});
Default.args = { id: 'toggle-switch-1' };

export default {
  title: 'Toggle Switch',
  component: ToggleSwitch,
  argTypes: { onChange: { action: 'toggled' } },
};

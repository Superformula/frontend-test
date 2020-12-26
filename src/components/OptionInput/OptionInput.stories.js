import React from 'react';
import { OptionInput } from './';

const Template = args => <OptionInput {...args}>Click me!</OptionInput>;

export const Default = Template.bind({});
Default.args = { id: 'OptionInput-1', checked: false, type: 'checkbox' };

export default {
  title: 'OptionInput',
  component: OptionInput,
  argTypes: { onChange: { action: 'clicked' } },
};

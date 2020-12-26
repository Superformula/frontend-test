import React from 'react';
import { RadioButton } from './';

const radios = ['first', 'second', 'third'];
const Template = args =>
  radios.map(radio => (
    <RadioButton {...{ key: radio, value: radio, id: radio, ...args }}>
      {radio}
    </RadioButton>
  ));

export const Default = Template.bind({});
Default.args = { name: 'radio-name' };

export default {
  title: 'Radio Button',
  component: RadioButton,
  argTypes: { onChange: { action: 'clicked' } },
};

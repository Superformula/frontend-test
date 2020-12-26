import React, { useState } from 'react';
import { RadioSelect } from './';

const Template = args => {
  const [selected, setSelected] = useState();
  const onChange = event => setSelected(event?.target?.value);
  return <RadioSelect {...{ ...args, selected, onChange }} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Price',
  options: ['$', '$$', '$$$', '$$$$'],
  name: 'price',
};

export default {
  title: 'Radio Select',
  component: RadioSelect,
};

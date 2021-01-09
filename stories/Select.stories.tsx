import { Story, Meta } from '@storybook/react/types-6-0';
import * as React from 'react';

import Select, { SelectProps } from '../src/design-system/Select';
import ThemeProvider from '../src/design-system/theme';

export default {
  title: 'Resto Explorer/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => {
  const [value, setValue] = React.useState<string | undefined>('All');

  return (
    <ThemeProvider>
      <Select {...args} value={value} onChange={setValue} />
      <p>Some random text</p>
      <p>Some random text</p>
      <p>Some random text</p>
      <p>Some random text</p>
    </ThemeProvider>
  );
};

export const BasicSelect: Story<SelectProps> = Template.bind({});
BasicSelect.args = {
  options: ['All', 'Tesla', 'Ford', 'Chevrolet'],
};

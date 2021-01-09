import { Story, Meta } from '@storybook/react/types-6-0';
import * as React from 'react';

import Checkbox, { CheckboxProps } from '../src/design-system/Checkbox';
import ThemeProvider from '../src/design-system/theme';

export default {
  title: 'Resto Explorer/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <ThemeProvider>
      <Checkbox {...args} checked={checked} onChange={setChecked} />
    </ThemeProvider>
  );
};

export const BasicCheckbox: Story<CheckboxProps> = Template.bind({});
BasicCheckbox.args = {
  label: 'Open Now',
};

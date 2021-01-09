import { Story, Meta } from '@storybook/react/types-6-0';
import * as React from 'react';
import styled from 'styled-components';

import Button, { ButtonProps } from '../src/design-system/Button';
import ThemeProvider from '../src/design-system/theme';

const StyledButton = styled(Button)`
  font-size: 12px;
  line-height: 16px;
  width: 150px;
  height: 38px;
`;

export default {
  title: 'Resto Explorer/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <ThemeProvider>
    <StyledButton {...args} onClick={() => console.log('Button clicked!')} />
  </ThemeProvider>
);

export const FilledButton: Story<ButtonProps> = Template.bind({});
FilledButton.args = {
  children: 'Click me!',
  variant: 'filled',
};

export const OutlinedButton: Story<ButtonProps> = Template.bind({});
OutlinedButton.args = {
  children: 'Click me!',
  variant: 'outlined',
};

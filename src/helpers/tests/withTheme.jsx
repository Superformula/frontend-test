import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';

export const shallowWithTheme = children => shallow(
  <ThemeProvider theme={theme}>{children}</ThemeProvider>,
);

export const mountWithTheme = children => mount(
  <ThemeProvider theme={theme}>{children}</ThemeProvider>,
);

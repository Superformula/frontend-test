import * as React from 'react';
import {
  DefaultTheme,
  ThemeProvider as Provider,
  createGlobalStyle,
} from 'styled-components';
import { Reset } from 'styled-reset';

const defaultTheme: DefaultTheme = {
  htmlFontSize: 16,
  px2rem: (size: number) => `${size / defaultTheme.htmlFontSize}rem`,
  colors: {
    primary: '#002B56',
    textPrimary: '#333333',
    textSecondary: '#666666',
    white: '#FFFFFF',
    black: '#000000',
    caption: '#757575',
    label: '#606060',
    divider1: '#E6E6E6',
    divider2: '#C8C8C8',
  },
};

const GlobalStyle = createGlobalStyle`
  body {
   font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
   font-weight: 300;
  }
`;

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: DefaultTheme;
}

function ThemeProvider({ children, theme = defaultTheme }: ThemeProviderProps) {
  return (
    <Provider theme={theme}>
      <Reset />
      <GlobalStyle />
      {children}
    </Provider>
  );
}

export { defaultTheme };
export default ThemeProvider;

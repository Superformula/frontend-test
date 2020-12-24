import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { COLORS } from 'consts/colors';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html, body {
    height: 100%;
    width: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${COLORS.BLACK};
    font-size: 14px;
    line-height: 1;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, p, input {
    padding: 0;
    margin: 0;
  }

  #root {
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

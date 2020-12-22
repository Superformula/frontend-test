import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { COLORS } from '../constants/colors';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html, body {
    height: 100%;
    width: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: ${COLORS.BLACK};
  }

  #root {
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

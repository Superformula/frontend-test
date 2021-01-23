import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    font: 400 normal 100%/1.2 "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;

    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }
`

export default GlobalStyles
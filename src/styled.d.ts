import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      white: string,
      black: string,
      offblack: string,
      gray: string,
      offgray: string,
      lightgray: string,
      offwhite: string,
      blue: string,
      hoverBlue: string,
      green: string,
      red: string
    }
  }
}
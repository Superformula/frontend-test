import 'styled-components';
import 'react';

declare module 'styled-components' {
  export interface DefaultTheme {
    htmlFontSize: number;
    px2rem: (size: number) => string;
    colors: {
      primary: string;
      textPrimary: string;
      textSecondary: string;
      caption: string;
      label: string;
      divider1: string;
      divider2: string;
      gray: string;
      white: string;
      black: string;
    };
  }
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface HTMLAttributes<T> {
    alt?: string;
  }
}

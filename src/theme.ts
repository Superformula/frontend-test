export const theme = {
  backgroundColor: "green",
  color: "red",
};

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}

export type ITheme = typeof theme;

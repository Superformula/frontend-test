export const theme = {
  colors: {
    primary: "#002B56",
    blue: "#002B56",
    green: "#00E8A4",
    fuchsia: "#FF3548",
    white: "#FFFFFF",
    grey100: "#E6E6E6",
    grey200: "#C8C8C8",
    grey300: "#D8D8D8",
    grey400: "#606060",
    grey500: "#666666",
    grey600: "#333333",
  },
  // TODO not so sure about this
  borderRadius: {
    small: "2px",
  },
  fontSize: {
    x300: "12px",
    x400: "14px",
  },
  backgroundColor: "green",
};

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}

export type ITheme = typeof theme;

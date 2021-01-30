import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../src/theme";
import GlobalStyles from "../src/components/GlobalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    );
  },
];

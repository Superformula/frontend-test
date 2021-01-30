import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, withTheme } from "@emotion/react";
import { getClient } from "../src/dal/apollo";
import { theme } from "../src/theme";
import GlobalStyles from "../src/components/GlobalStyles";

export interface IProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

export default function App({ Component, pageProps }: IProps) {
  const apolloClient = getClient();

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

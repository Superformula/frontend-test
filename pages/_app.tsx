import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import { getClient } from "../src/dal/apollo";
import { theme } from "../src/theme";
import GlobalStyles from "../src/components/GlobalStyles";

export interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.ComponentType<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}

export default function App({ Component, pageProps }: IProps): JSX.Element {
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

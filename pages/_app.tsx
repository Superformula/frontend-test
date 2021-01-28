import React from "react";
import { ApolloProvider } from "@apollo/client";
import { getClient } from "../src/dal/apollo";

export interface IProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

export default function App({ Component, pageProps }: IProps) {
  const apolloClient = getClient();

  return (
    <ApolloProvider client={apolloClient}>
      <div style={{ margin: "20px" }}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

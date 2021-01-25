import * as React from "react";
import { ApolloProvider } from '@apollo/client'
import { yelpAPI } from '@utils/api'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import RestaurantsProvider from '@providers/Restaurants'
import { theme } from '@components/Layout/Theme'
import GlobalStyles from '@components/Layout/GlobalStyles'
import Sprite from '@components/Layout/Sprite'

export const decorators = [
  (Story) => (
    <ApolloProvider client={yelpAPI}>
      <ThemeProvider theme={theme}>
        <RestaurantsProvider>
          <Head>
            <link href="/static/fonts/styles.css" rel="stylesheet" />
          </Head>
          <GlobalStyles />
          <Sprite />
          <Story />
        </RestaurantsProvider>
      </ThemeProvider>
    </ApolloProvider>
  ),
];
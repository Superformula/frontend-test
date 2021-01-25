import { ApolloProvider } from '@apollo/client'
import { yelpAPI } from '@utils/api'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import RestaurantsProvider from '@providers/Restaurants'
import { theme } from '@components/Layout/Theme'
import GlobalStyles from '@components/Layout/GlobalStyles'
import Sprite from '@components/Layout/Sprite'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={yelpAPI}>
      <ThemeProvider theme={theme}>
        <RestaurantsProvider>
          <Head>
            <link rel="icon" type="image/png" href="/static/images/favicon.png" />
            <link href="/static/fonts/styles.css" rel="stylesheet" />
          </Head>
          <GlobalStyles />
          <Sprite />
          <Component {...pageProps} />
        </RestaurantsProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme, useApollo } from '~/common'
import type { PageProps } from '~/types'

export default function App({ Component, pageProps }: AppProps): ReactElement {
    const { initialApolloState, ...rest } = pageProps as PageProps
    const client = useApollo(initialApolloState)

    return (
        <ApolloProvider client={client}>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Component {...rest} />
            </ThemeProvider>
        </ApolloProvider>
    )
}

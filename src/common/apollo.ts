import {
    ApolloClient as Client,
    createHttpLink,
    InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import merge from 'deepmerge'
import fetch from 'isomorphic-unfetch'
import { useMemo } from 'react'

import introspectionResults from '~/graphql'
import type { ApolloCache, ApolloClient } from '~/types'
import { GRAPHQL_SCHEMA_URL, SSR, YELP_API_KEY } from './constants'

let client: ApolloClient

const httpLink = createHttpLink({
    uri: SSR ? GRAPHQL_SCHEMA_URL : `${window.location.origin}/graphql`,
    fetch,
})
const authLink = setContext((_, { headers }) => ({
    headers: {
        ...((headers || {}) as Record<string, string>),
        authorization: `Bearer ${YELP_API_KEY}`,
        'Accept-Language': 'en_US',
    },
}))

function createApolloClient(): ApolloClient {
    return new Client({
        ssrMode: SSR,
        ssrForceFetchDelay: 100,
        link: authLink.concat(httpLink),
        cache: new InMemoryCache({
            possibleTypes: introspectionResults.possibleTypes,
        }),
    })
}

export function initializeApollo(initialState?: ApolloCache): ApolloClient {
    const _client = !client ? createApolloClient() : client

    if (initialState) {
        _client.cache.restore(merge(initialState, _client.extract()))
    }

    if (SSR) {
        return _client
    }

    if (!client) {
        client = _client
    }

    return _client
}

export function useApollo(initialState?: ApolloCache): ApolloClient {
    return useMemo(() => initializeApollo(initialState), [initialState])
}

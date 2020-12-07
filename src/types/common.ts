import { ApolloClient as Client } from '@apollo/client'

import type { Maybe } from '~/graphql'

export type MaybeArray<T = unknown> = Maybe<Array<Maybe<T>>>

export type NonNullableRequired<T> = {
    [P in keyof T]-?: NonNullable<T[P]>
}

export type ApolloCache = Record<string, unknown>
export type ApolloClient = Client<ApolloCache>

export type PageProps<T = unknown> = T & {
    initialApolloState: ApolloCache
}

import { gql } from '@apollo/client'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { ReactElement } from 'react'

import { initializeApollo, SSR } from '~/common'
import { RestaurantsQuery, useRestaurantsQuery } from '~/graphql'
import { PageProps } from '~/types'

export const RestaurantsGql = gql`
    query Restaurants {
        business(id: "garaje-san-francisco") {
            name
            id
            alias
            rating
            url
        }
    }
`

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const client = initializeApollo()

    await client.query<RestaurantsQuery>({
        query: RestaurantsGql,
    })

    return {
        props: {
            initialApolloState: client.cache.extract(),
        },
    }
}

export default function Restaurants(): ReactElement {
    const { data } = useRestaurantsQuery({
        fetchPolicy: SSR ? 'cache-only' : 'cache-and-network',
    })

    console.log(data)

    return (
        <>
            <Head>
                <title>Restaurants</title>
            </Head>
            <h1>Restaurants</h1>
            <p className="large color-gray-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </>
    )
}

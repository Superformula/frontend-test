import { gql } from '@apollo/client'
import { GetStaticProps } from 'next'
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

    return <></>
}

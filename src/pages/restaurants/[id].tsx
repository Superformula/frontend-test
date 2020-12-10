import { gql } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import React, { ReactElement, useState } from 'react'

import { initializeApollo, SSR } from '~/common'
import { Container } from '~/components'
import {
    RestaurantQuery,
    RestaurantQueryVariables,
    RestaurantsQuery,
    useRestaurantQuery,
} from '~/graphql'
import { PageProps } from '~/types'
import { RestaurantsGql } from '.'

export const RestaurantGql = gql`
    query Restaurant($id: String!, $offset: Int = 0, $limit: Int = 3) {
        business(id: $id) {
            id
            photos
            name
            categories {
                title
            }
            price
            location {
                formatted_address
            }
            review_count
            reviews(offset: $offset, limit: $limit) {
                id
                user {
                    id
                    image_url
                    name
                }
                time_created
                rating
                text
            }
        }
    }
`

export const getStaticPaths: GetStaticPaths = async () => {
    const client = initializeApollo()
    const { data } = await client.query<RestaurantsQuery>({
        query: RestaurantsGql,
    })

    return {
        paths: (data.search?.business || []).reduce(
            (paths: string[], business) =>
                business ? [...paths, `/restaurants/${business.id}`] : paths,
            ['/'],
        ),
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<PageProps, { id: string }> = async (
    context,
) => {
    const id = context.params?.id

    if (!id) {
        throw new Error('Restaurant id is required')
    }

    const client = initializeApollo()

    await client.query<RestaurantQuery>({
        query: RestaurantGql,
        variables: {
            id,
        },
    })

    return {
        props: {
            initialApolloState: client.cache.extract(),
            id,
        },
    }
}

export default function RestaurantPage({
    id,
}: PageProps<{ id: string }>): ReactElement | null {
    const [restaurantVariables] = useState<RestaurantQueryVariables>({
        id,
        offset: undefined,
        limit: undefined,
    })
    const { data } = useRestaurantQuery({
        fetchPolicy: SSR ? 'cache-only' : 'cache-and-network',
        variables: restaurantVariables,
    })

    if (!data?.business) {
        return null
    }

    const { name, review_count } = data.business

    return (
        <>
            <Head>
                <title>Restaurant</title>
            </Head>
            <Container>
                <h1>{name}</h1>
            </Container>
            <Container>
                <h2>{review_count} Reviews</h2>
            </Container>
        </>
    )
}

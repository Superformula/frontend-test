import { gql } from '@apollo/client'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { ReactElement, useMemo, useState } from 'react'

import { initializeApollo, SSR } from '~/common'
import { Container, Filters } from '~/components'
import type { Values } from '~/components/Filters'
import {
    CategoriesQuery,
    RestaurantsQuery,
    RestaurantsQueryVariables,
    useCategoriesQuery,
    useRestaurantsQuery,
} from '~/graphql'
import { PageProps } from '~/types'

export const CategoriesGql = gql`
    query Categories {
        categories(country: "US") {
            category {
                alias
                title
                parent_categories {
                    alias
                    title
                }
            }
        }
    }
`

export const RestaurantsGql = gql`
    query Restaurants(
        $offset: Int = 0
        $limit: Int = 8
        $categories: String
        $open_now: Boolean
        $price: String
    ) {
        search(
            location: "Las Vegas"
            offset: $offset
            limit: $limit
            categories: $categories
            open_now: $open_now
            price: $price
        ) {
            total
            business {
                id
                photos
                name
                categories {
                    title
                }
                price
            }
        }
    }
`

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const client = initializeApollo()

    await client.query<CategoriesQuery>({
        query: CategoriesGql,
    })
    await client.query<RestaurantsQuery>({
        query: RestaurantsGql,
    })

    return {
        props: {
            initialApolloState: client.cache.extract(),
        },
    }
}

export default function Restaurants(): ReactElement | null {
    const categoriesQuery = useCategoriesQuery({
        fetchPolicy: SSR ? 'cache-only' : 'cache-and-network',
    })
    const [
        restaurantsVariables,
        setRestaurantsVariables,
    ] = useState<RestaurantsQueryVariables>({
        offset: undefined,
        limit: undefined,
        categories: null,
        open_now: null,
        price: null,
    })
    const restaurantsQuery = useRestaurantsQuery({
        fetchPolicy: SSR ? 'cache-only' : 'cache-and-network',
        variables: restaurantsVariables,
    })
    const categories = useMemo(
        () =>
            categoriesQuery.data?.categories?.category?.reduce(
                (acc: Array<{ label: string; value: string }>, category) => {
                    if (
                        !!category?.alias &&
                        !!category?.title &&
                        category?.parent_categories?.some(
                            (parent) => parent?.alias === 'restaurants',
                        )
                    ) {
                        acc.push({
                            label: category.title,
                            value: category.alias,
                        })
                    }

                    return acc
                },
                [],
            ) || [],
        [categoriesQuery.data?.categories?.category],
    )

    if (!categoriesQuery.data?.categories?.category) {
        return null
    }

    console.log({
        categories: categoriesQuery.data,
        restaurants: restaurantsQuery.data,
    })

    console.log({
        categories,
    })

    function onChange(values: Values): void {
        setRestaurantsVariables({
            ...restaurantsVariables,
            categories: values.categories.length
                ? values.categories.join()
                : null,
            open_now: values.open ? true : null,
            price: values.price
                ? new Array(values.price).fill('$').join('')
                : null,
        })
    }

    return (
        <>
            <Head>
                <title>Restaurants</title>
            </Head>
            <Container>
                <h1>Restaurants</h1>
                <p className="large color-gray-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </Container>
            <Filters categories={categories} onChange={onChange} />
            <Container>
                <h2>All Restaurants</h2>
            </Container>
        </>
    )
}

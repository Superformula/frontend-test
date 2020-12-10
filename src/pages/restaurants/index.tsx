import { gql } from '@apollo/client'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { ReactElement, useEffect, useMemo, useState } from 'react'

import { initializeApollo, isNull, nonNilFilter, SSR } from '~/common'
import { Container, Filters, Restaurants } from '~/components'
import type { Values } from '~/components/Filters'
import type { Props as RestaurantsProps } from '~/components/Restaurants'
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
                rating
                categories {
                    alias
                    title
                }
                price
                is_closed
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

export default function RestaurantsPage(): ReactElement | null {
    const categoriesQuery = useCategoriesQuery({
        fetchPolicy: SSR ? 'cache-only' : 'cache-and-network',
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
    const [businesses, setBusinesses] = useState<
        NonNullable<NonNullable<RestaurantsQuery['search']>['business']>
    >([])
    const restaurants = useMemo(() => {
        const categoryFilters =
            restaurantsVariables.categories?.split(',') || []

        return businesses.reduce(
            (acc: RestaurantsProps['restaurants'], business) => {
                if (business?.id && business?.name) {
                    const [thumbnail] = nonNilFilter(business?.photos)
                    const categories = nonNilFilter(business?.categories)
                    const cost = business?.price || ''
                    const open = !(business?.is_closed ?? true)

                    if (
                        (isNull(restaurantsVariables.categories) ||
                            categories.some(
                                (category) =>
                                    category?.alias &&
                                    categoryFilters.includes(category.alias),
                            )) &&
                        (isNull(restaurantsVariables.price) ||
                            restaurantsVariables.price === `${cost.length}`) &&
                        (isNull(restaurantsVariables.open_now) ||
                            restaurantsVariables.open_now === open)
                    ) {
                        const [category] = categories

                        acc.push({
                            id: business.id,
                            thumbnail: thumbnail || '',
                            name: business.name,
                            rating: business?.rating ?? 0,
                            type: category?.title ?? '',
                            cost,
                            open,
                        })
                    }
                }

                return acc
            },
            [],
        )
    }, [
        businesses,
        restaurantsVariables.categories,
        restaurantsVariables.price,
        restaurantsVariables.open_now,
    ])

    function onChange(values: Values): void {
        setRestaurantsVariables({
            ...restaurantsVariables,
            categories: values.categories.length
                ? values.categories.join()
                : null,
            open_now: values.open ? true : null,
            price: values.price,
            offset: 0,
        })
    }

    function onLoadMore(): void {
        setRestaurantsVariables({
            ...restaurantsVariables,
            offset:
                (restaurantsVariables.offset || 0) +
                (restaurantsVariables.limit || 8),
        })
    }

    useEffect(() => {
        if (!restaurantsQuery.loading) {
            setBusinesses(nonNilFilter(restaurantsQuery.data?.search?.business))
        }
    }, [restaurantsQuery.loading, restaurantsQuery.data?.search?.business])

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
            <Restaurants
                loading={restaurantsQuery.loading}
                more={
                    (restaurantsQuery.data?.search?.total ?? 0) >
                    (restaurantsVariables.offset || 0) +
                        (restaurantsVariables.limit || 8)
                }
                restaurants={restaurants}
                onLoadMore={onLoadMore}
            >
                <h4>{restaurantsQuery.error || 'No results'}</h4>
            </Restaurants>
        </>
    )
}

import React, { memo, ReactElement, ReactNode } from 'react'

import { Button, ButtonKind } from '../Button'
import { Container } from '../Container'
import { Props as RestaurantProps, Restaurant } from '../Restaurant'
import { Root, Grid, Cell, Footer } from './styled'

export interface Props {
    children?: ReactNode
    loading?: boolean
    more?: boolean
    restaurants: RestaurantProps[]
    onLoadMore: () => void
}

export const TEST_IDS = Object.freeze({
    root: 'RestaurantsRoot',
    grid: 'RestaurantsGrid',
    cell: 'RestaurantsCell',
    load: 'RestaurantsLoad',
})

export const Restaurants = memo(
    ({
        children,
        loading = false,
        more = false,
        restaurants,
        onLoadMore,
    }: Props): ReactElement | null => {
        if (restaurants.length === 0 && !children) {
            return null
        }

        return (
            <Root data-testid={TEST_IDS.root}>
                <Container>
                    {restaurants.length > 0 ? (
                        <Grid data-testid={TEST_IDS.grid}>
                            {restaurants.map((restaurant) => (
                                <Cell
                                    key={restaurant.id}
                                    data-testid={TEST_IDS.cell}
                                >
                                    <Restaurant {...restaurant} />
                                </Cell>
                            ))}
                            {(loading || more) && (
                                <Footer>
                                    <Button
                                        kind={ButtonKind.Outline}
                                        disabled={loading}
                                        onClick={onLoadMore}
                                        data-testid={TEST_IDS.load}
                                    >
                                        {loading ? 'Loading' : 'Load More'}
                                    </Button>
                                </Footer>
                            )}
                        </Grid>
                    ) : (
                        children
                    )}
                </Container>
            </Root>
        )
    },
)

Restaurants.displayName = 'Restaurants'

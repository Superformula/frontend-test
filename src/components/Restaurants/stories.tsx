import { action, withActions } from '@storybook/addon-actions'
import { boolean, number, withKnobs } from '@storybook/addon-knobs'
import { loremIpsum } from 'lorem-ipsum'
import React, { ReactElement } from 'react'

import { randomInt } from '~/common'
import { Props, Restaurants } from '.'

export default {
    title: 'Components',
    decorators: [withActions, withKnobs],
}

const cache: Record<number, Props['restaurants'][number]> = {}

function createRestaurants(count: number): Props['restaurants'] {
    return new Array(count).fill(null).map((_, index) => {
        const restaurant = cache[index] || {
            id: `${index}`,
            thumbnail: `https://picsum.photos/900/650?${index}`,
            name: loremIpsum({
                units: 'words',
                count: randomInt({ min: 1, max: 4 }),
            }),
            rating: randomInt({ min: 1, max: 5 }),
            type: loremIpsum({ units: 'words', count: 1 }),
            cost: new Array(randomInt({ min: 1, max: 4 })).fill('$').join(''),
            open: !!Math.round(Math.random()),
        }

        cache[index] = restaurant

        return restaurant
    })
}

export const restaurants = (): ReactElement => (
    <Restaurants
        loading={boolean('loading', false)}
        more={boolean('more', true)}
        restaurants={createRestaurants(number('restaurantsCount', 8))}
        onLoadMore={action('onLoadMore')}
    >
        <blockquote>
            <h4>No results</h4>
            <p>Try adjusting filters to find restaurants</p>
        </blockquote>
    </Restaurants>
)

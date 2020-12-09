import { date, number, text, withKnobs } from '@storybook/addon-knobs'
import { loremIpsum } from 'lorem-ipsum'
import React, { ReactElement } from 'react'

import { Review } from '.'

export default {
    title: 'Components',
    decorators: [withKnobs],
}

export const review = (): ReactElement => (
    <Review
        avatar={text('avatar', 'https://picsum.photos/300/300')}
        name={text('name', 'Cindy Lou')}
        date={new Date(date('date')).toISOString()}
        rating={number('rating', 0)}
        comments={text(
            'comments',
            loremIpsum({ units: 'paragraphs', count: 2 }),
        )}
    />
)

import { action, withActions } from '@storybook/addon-actions'
import { boolean, number, withKnobs } from '@storybook/addon-knobs'
import React, { ReactElement } from 'react'

import { Rating } from '.'

export default {
    title: 'Components',
    decorators: [withActions, withKnobs],
}

export const rating = (): ReactElement => (
    <Rating
        maxRating={number('maxRating', 5)}
        rating={number('rating', 0)}
        onChange={boolean('editable', false) ? action('onChange') : undefined}
    />
)

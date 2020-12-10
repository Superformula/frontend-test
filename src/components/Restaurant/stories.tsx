import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'
import React, { ReactElement } from 'react'

import { Restaurant } from '.'

export default {
    title: 'Components',
    decorators: [withKnobs],
}

export const restaurant = (): ReactElement => (
    <div style={{ maxWidth: '600px' }}>
        <Restaurant
            id=""
            thumbnail={text('avatar', 'https://picsum.photos/800/600')}
            name={text('name', 'Backyard BBQ')}
            rating={number('rating', 0)}
            type={text('type', 'Barbeque')}
            cost={text('cost', '$$')}
            open={boolean('open', true)}
        />
    </div>
)

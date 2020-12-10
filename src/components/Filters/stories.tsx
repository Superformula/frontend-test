import { action, withActions } from '@storybook/addon-actions'
import { array, withKnobs } from '@storybook/addon-knobs'
import React, { ReactElement } from 'react'

import { Filters } from '.'

export default {
    title: 'Components',
    decorators: [withActions, withKnobs],
}

export const filters = (): ReactElement => (
    <Filters
        categories={array('categories', ['Foo', 'Bar', 'Wux']).map((value) => ({
            label: value,
            value,
        }))}
        onChange={action('onChange')}
    />
)

import React, { ReactElement } from 'react'
import { boolean, withKnobs } from '@storybook/addon-knobs'

import { Checkbox } from '.'

export default {
    title: 'Components',
    decorators: [withKnobs],
}

export const checkbox = (): ReactElement => (
    <Checkbox checked={boolean('checked', false)} />
)

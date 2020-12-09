import { boolean, withKnobs } from '@storybook/addon-knobs'
import React, { ReactElement } from 'react'

import { Toggle } from '.'

export default {
    title: 'Components',
    decorators: [withKnobs],
}

export const toggle = (): ReactElement => (
    <Toggle checked={boolean('checked', false)} />
)

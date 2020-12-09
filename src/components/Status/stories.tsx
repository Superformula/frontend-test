import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import React, { ReactElement } from 'react'

import { Status, StatusKind } from '.'

export default {
    title: 'Components',
    decorators: [withKnobs],
}

export const status = (): ReactElement => (
    <Status
        kind={select('kind', [StatusKind.Dot, StatusKind.Pill], StatusKind.Dot)}
        open={boolean('open', false)}
    />
)

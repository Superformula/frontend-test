import { array, text, withKnobs } from '@storybook/addon-knobs'
import React, { ReactElement } from 'react'

import { Dropdown } from '.'

export default {
    title: 'Components',
    decorators: [withKnobs],
}

export const dropdown = (): ReactElement => (
    <Dropdown label={text('label', 'Action')}>
        {array('items', ['Thing 1', 'Thing 2', 'Thing 3']).map((value) => (
            <div key={value}>{value}</div>
        ))}
    </Dropdown>
)

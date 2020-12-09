import { withActions } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import React, { ReactElement } from 'react'

import { Button, ButtonKind } from '.'

export default {
    title: 'Components',
    decorators: [withActions, withKnobs],
}

export const button = (): ReactElement => (
    <Button
        kind={select(
            'kind',
            [ButtonKind.Primary, ButtonKind.Outline, ButtonKind.Blank],
            ButtonKind.Primary,
        )}
        disabled={boolean('disabled', false)}
    >
        {text('label', 'Take Action')}
    </Button>
)

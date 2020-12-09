import { withActions } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import React, { ReactElement } from 'react'

import { Button, StyledButton } from '.'

export default {
    title: 'Components',
    decorators: [withActions, withKnobs],
}

export const button = (): ReactElement => (
    <Button
        kind={select(
            'kind',
            [
                StyledButton.Kind.Primary,
                StyledButton.Kind.Outline,
                StyledButton.Kind.Blank,
            ],
            StyledButton.Kind.Primary,
        )}
        disabled={boolean('disabled', false)}
    >
        {text('label', 'Take Action')}
    </Button>
)

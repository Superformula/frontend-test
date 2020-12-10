import React, { memo, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { Root } from './styled'

export * as StyledCheckbox from './styled'

export interface Props {
    checked?: boolean
}

export const Checkbox = memo(
    ({ checked = false }: Props): ReactElement => {
        return (
            <ThemeProvider theme={{ checked }}>
                <Root />
            </ThemeProvider>
        )
    },
)

Checkbox.displayName = 'Checkbox'

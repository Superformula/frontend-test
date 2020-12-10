import React, { memo, ReactElement } from 'react'

import { Root, Handle } from './styled'
import { ThemeProvider } from 'styled-components'

export * as StyledToggle from './styled'

export interface Props {
    checked?: boolean
}

export const Toggle = memo(
    ({ checked = false, ...rest }: Props): ReactElement => {
        return (
            <ThemeProvider theme={{ checked }}>
                <Root {...rest}>
                    <Handle />
                </Root>
            </ThemeProvider>
        )
    },
)

Toggle.displayName = 'Toggle'

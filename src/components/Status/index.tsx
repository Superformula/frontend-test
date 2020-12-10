import React, { memo, ReactElement } from 'react'

import { Kind, Root } from './styled'
import { ThemeProvider } from 'styled-components'

export * as StyledStatus from './styled'
export const StatusKind = Kind

export interface Props {
    kind?: Kind
    open?: boolean
}

export const Status = memo(
    ({ kind = Kind.Dot, open = false, ...rest }: Props): ReactElement => {
        return (
            <ThemeProvider theme={{ kind, open }}>
                <Root {...rest}>{open ? 'Open' : 'Closed'}</Root>
            </ThemeProvider>
        )
    },
)

Status.displayName = 'Status'

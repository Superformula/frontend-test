import React, { memo, ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { Root, Container } from './styled'

export * as StyledRatio from './styled'

export interface Props {
    children?: ReactNode
    ratio?: number
}

export const Ratio = memo(
    ({ ratio = 56.25, children, ...rest }: Props): ReactElement => (
        <ThemeProvider theme={{ ratio }}>
            <Root {...rest}>
                <Container>{children}</Container>
            </Root>
        </ThemeProvider>
    ),
)

Ratio.displayName = 'Ratio'

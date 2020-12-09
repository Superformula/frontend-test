import React, { memo, ReactElement, ReactNode } from 'react'

import { Kind, Root, Content } from './styled'
import { ThemeProvider } from 'styled-components'

export * as StyledButton from './styled'

export interface OwnProps {
    children: ReactNode
    kind?: Kind
}

export type Props = Omit<JSX.IntrinsicElements['button'], 'ref'> & OwnProps

export const Button = memo(
    ({ children, kind = Kind.Primary, ...rest }: Props): ReactElement => {
        return (
            <ThemeProvider theme={{ kind }}>
                <Root {...rest}>
                    <Content>{children}</Content>
                </Root>
            </ThemeProvider>
        )
    },
)

Button.displayName = 'Button'

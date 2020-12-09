import React, { memo, ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { Kind, Root, Content } from './styled'

export * as StyledButton from './styled'
export const ButtonKind = Kind

export interface OwnProps {
    children: ReactNode
    kind?: Kind
}

export type Props = Omit<JSX.IntrinsicElements['button'], 'ref'> & OwnProps

export const Button = memo(
    ({
        children,
        disabled = false,
        kind = Kind.Primary,
        ...rest
    }: Props): ReactElement => {
        return (
            <ThemeProvider theme={{ disabled, kind }}>
                <Root disabled={disabled} {...rest}>
                    <Content>{children}</Content>
                </Root>
            </ThemeProvider>
        )
    },
)

Button.displayName = 'Button'

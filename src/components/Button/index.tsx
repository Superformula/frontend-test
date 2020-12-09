import React, { memo, ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { Kind, Root, Content } from './styled'

export * as StyledButton from './styled'
export const ButtonKind = Kind

export interface OwnProps {
    children: ReactNode
    kind?: Kind
}

export type Props = OwnProps &
    (
        | Pick<JSX.IntrinsicElements['a'], 'href' | 'target'>
        | Pick<JSX.IntrinsicElements['button'], 'disabled' | 'onClick'>
    )

export const Button = memo(
    ({ children, kind = Kind.Primary, ...rest }: Props): ReactElement => {
        const disabled = 'disabled' in rest ? rest.disabled : false

        return (
            <ThemeProvider theme={{ disabled, kind }}>
                {'href' in rest ? (
                    <Root as="a" {...rest}>
                        <Content>{children}</Content>
                    </Root>
                ) : (
                    <Root disabled={disabled} {...rest}>
                        <Content>{children}</Content>
                    </Root>
                )}
            </ThemeProvider>
        )
    },
)

Button.displayName = 'Button'

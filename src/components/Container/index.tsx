import React, { memo, ReactElement, ReactNode } from 'react'

import { Root } from './styled'

export * as StyledContainer from './styled'

export interface Props {
    children: ReactNode
}

export const Container = memo(
    ({ children, ...rest }: Props): ReactElement => {
        return <Root {...rest}>{children}</Root>
    },
)

Container.displayName = 'Container'

import React, { memo, ReactElement, ReactNode } from 'react'

import { Root } from './styled'

export * as StyledContainer from './styled'

export interface Props {
    children: ReactNode
}

export const Container = memo(
    ({ children }: Props): ReactElement => {
        return <Root>{children}</Root>
    },
)

Container.displayName = 'Container'

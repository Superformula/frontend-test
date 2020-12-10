import React, { memo, ReactElement } from 'react'

import { Container } from '../Container'
import { Root, Label } from './styled'

export * as StyledFilters from './styled'

export const Filters = memo(
    (): ReactElement => {
        return (
            <Root>
                <Container>
                    <Label>Filter By:</Label>
                </Container>
            </Root>
        )
    },
)

Filters.displayName = 'Filters'

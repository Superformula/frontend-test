import React, { memo, ReactElement, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

import { Button, ButtonKind } from '../Button'
import { Root, StarIcon } from './styled'

export * as StyledRating from './styled'

export interface Props {
    maxRating?: number
    rating?: number
    onChange?: (rating: number) => void
}

export const Rating = memo(
    ({ maxRating = 5, rating = 0, onChange, ...rest }: Props): ReactElement => {
        const stars = useMemo(() => new Array(maxRating).fill(null), [
            maxRating,
        ])

        function onClick(value: number): () => void {
            return () => {
                if (onChange) {
                    onChange(value)
                }
            }
        }

        return (
            <Root {...rest}>
                {stars.map((_, index) => (
                    <ThemeProvider
                        key={index}
                        theme={{
                            fill: index + 1 <= rating,
                        }}
                    >
                        {onChange ? (
                            <Button
                                kind={ButtonKind.Blank}
                                onClick={onClick(index + 1)}
                            >
                                <StarIcon />
                            </Button>
                        ) : (
                            <StarIcon />
                        )}
                    </ThemeProvider>
                ))}
            </Root>
        )
    },
)

Rating.displayName = 'Rating'

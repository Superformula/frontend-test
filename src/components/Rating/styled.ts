import styled, { css, ThemeProps } from 'styled-components'

import { Star } from '~/assets'
import { Theme } from '~/common'
import { Button, ButtonKind } from '../Button'

export interface StarTheme extends Theme {
    fill: boolean
}

export const StarIcon = styled(Star)(
    ({ theme }: ThemeProps<StarTheme>) => css`
        fill: ${theme.fill ? theme.colors.primary : theme.colors.white};
        stroke: ${theme.colors.primary};
    `,
)

export const StarButton = styled(Button).attrs({
    kind: ButtonKind.Blank,
})``

export const Root = styled.div(
    ({ theme }: ThemeProps<StarTheme>) => css`
        margin-bottom: 1em;
        display: inline-flex;
        flex-direction: row;

        &:hover,
        &:focus-within {
            ${StarButton} {
                ${StarIcon} {
                    fill: ${theme.colors.success};
                }

                &:focus,
                &:hover {
                    & ~ ${StarButton} ${StarIcon} {
                        fill: ${theme.colors.white};
                    }
                }
            }
        }
    `,
)

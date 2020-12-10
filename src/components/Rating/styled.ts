import styled, { css, ThemeProps } from 'styled-components'

import { Star } from '~/assets'
import { Theme } from '~/common'
import { StyledButton } from '../Button'

export interface StarTheme extends Theme {
    fill: boolean
}

export const StarIcon = styled(Star)(
    ({ theme }: ThemeProps<StarTheme>) => css`
        fill: ${theme.fill ? theme.colors.primary : theme.colors.white};
        stroke: ${theme.colors.primary};
    `,
)

export const Root = styled.div(
    ({ theme }: ThemeProps<StarTheme>) => css`
        margin-bottom: 1em;
        display: inline-flex;
        flex-direction: row;

        &:hover,
        &:focus-within {
            ${StyledButton.Root} {
                ${StarIcon} {
                    fill: ${theme.colors.success};
                }

                &:focus,
                &:hover {
                    & ~ ${StyledButton.Root} ${StarIcon} {
                        fill: ${theme.colors.white};
                    }
                }
            }
        }
    `,
)

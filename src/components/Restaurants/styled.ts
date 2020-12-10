import styled, { css, ThemeProps } from 'styled-components'

import { minWidthStyles, Theme } from '~/common'
import { StyledButton } from '../Button'
import { StyledRestaurant } from '../Restaurant'

export const Root = styled.div``

export const Grid = styled.div(
    ({ theme }: ThemeProps<Theme>) => css`
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: ${theme.spacing.lg}px;

        ${minWidthStyles.md} {
            grid-template-columns: 1fr 1fr;
            grid-gap: ${theme.spacing.lg + theme.spacing.md}px;
        }

        ${minWidthStyles.xl} {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: ${theme.spacing.xl}px;
        }
    `,
)

export const Cell = styled.div`
    ${StyledRestaurant.Root} {
        height: 100%;
    }
`

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    ${StyledButton.Root} {
        width: 100%;
    }

    ${minWidthStyles.md} {
        grid-column: 1 / 3;

        ${StyledButton.Root} {
            width: auto;
            min-width: 300px;
        }
    }

    ${minWidthStyles.xl} {
        grid-column: 2 / 4;
    }
`

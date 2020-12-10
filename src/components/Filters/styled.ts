import styled, { css, ThemeProps } from 'styled-components'

import { minWidthStyles, Theme } from '~/common'
import { StyledContainer } from '../Container'

export const Root = styled.div(
    ({ theme }: ThemeProps<Theme>) => css`
        border-top: 1px solid ${theme.colors['gray-6']};
        border-bottom: 1px solid ${theme.colors['gray-6']};

        ${StyledContainer.Root} {
            padding-top: ${theme.spacing.lg}px;
            padding-bottom: ${theme.spacing.lg}px;
        }

        ${minWidthStyles.md} {
            ${StyledContainer.Root} {
                padding-top: ${theme.spacing.lg + theme.spacing.sm}px;
                padding-bottom: ${theme.spacing.lg + theme.spacing.sm}px;
            }
        }

        ${minWidthStyles.xl} {
            ${StyledContainer.Root} {
                padding-top: ${theme.spacing.lg + theme.spacing.md}px;
                padding-bottom: ${theme.spacing.lg + theme.spacing.md}px;
            }
        }
    `,
)

export const Label = styled.label`
    color: ${({ theme }: ThemeProps<Theme>) => theme.colors['gray-2']};
`

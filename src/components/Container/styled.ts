import styled, { css, ThemeProps } from 'styled-components'

import { minWidthStyles, Theme } from '~/common'

export const Root = styled.section(
    ({ theme }: ThemeProps<Theme>) => css`
        max-width: 1200px;
        padding: ${theme.spacing.xl + theme.spacing.md + theme.spacing.xs}px
            ${theme.spacing.lg + theme.spacing.md}px;
        margin: 0 auto;

        ${minWidthStyles.md} {
            padding: ${theme.spacing.xl + theme.spacing.md}px;
        }

        ${minWidthStyles.xl} {
            padding: ${theme.spacing.xl + theme.spacing.sm}px
                ${theme.spacing.xxl}px;
        }
    `,
)

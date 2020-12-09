import { lighten, rem } from 'polished'
import styled, { css, ThemeProps } from 'styled-components'

import { minWidthStyles, Theme } from '~/common'

export enum Kind {
    Primary = 'Primary',
    Outline = 'Outline',
    Blank = 'Blank',
}

export interface ButtonTheme extends Theme {
    kind: Kind
}

const styles = {
    [Kind.Primary]: (theme: ButtonTheme) => css`
        padding: ${theme.spacing.xl}px;
        border: 1px solid ${theme.colors.primary};
        background: ${theme.colors.primary};
        text-transform: uppercase;
        text-align: center;
        font-size: ${rem(12)};
        color: ${theme.colors.white};
        transition: background 250ms;

        &:hover {
            background: ${lighten(0.1, theme.colors.primary)};
        }

        ${minWidthStyles.md} {
            font-size: ${rem(13)};
        }

        ${minWidthStyles.xl} {
            font-size: ${rem(14)};
        }
    `,
    [Kind.Outline]: (theme: ButtonTheme) => css`
        padding: ${theme.spacing.xl}px;
        border: 1px solid ${theme.colors.primary};
        background: ${theme.colors.white};
        text-transform: uppercase;
        text-align: center;
        font-size: ${rem(12)};
        color: ${theme.colors.primary};
        transition: background 250ms;

        &:hover {
            background: ${theme.colors['gray-5']};
        }

        ${minWidthStyles.md} {
            font-size: ${rem(13)};
        }

        ${minWidthStyles.xl} {
            font-size: ${rem(14)};
        }
    `,
    [Kind.Blank]: () => css`
        padding: 0;
        border: 0;
        background: none;
    `,
}

export const Root = styled.button`
    appearance: none;
    display: inline-flex;
    cursor: pointer;
    ${({ theme }: ThemeProps<ButtonTheme>) => styles[theme.kind](theme)};
`

export const Content = styled.span`
    display: flex;
    flex-direction: row;
`

import { cover } from 'polished'
import styled, { css, ThemeProps } from 'styled-components'

import { Theme } from '~/common'

export enum Kind {
    Dot = 'Dot',
    Pill = 'Pill',
}

export interface StatusTheme extends Theme {
    kind: Kind
    open: boolean
}

const styles = {
    [Kind.Dot]: (theme: StatusTheme) => css`
        &::before {
            width: 0.5em;
            height: 0.5em;
            border-radius: 100%;
            margin-right: ${theme.spacing.sm}px;
        }
    `,
    [Kind.Pill]: (theme: StatusTheme) => css`
        padding: ${theme.spacing.xs}px ${theme.spacing.sm}px;
        color: ${theme.open ? theme.colors.primary : theme.colors.white};

        &::before {
            border-radius: 0.75em;
            ${cover()};
            z-index: -1;
        }
    `,
}

export const Root = styled.span(
    ({ theme }: ThemeProps<StatusTheme>) => css`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        text-transform: uppercase;

        &::before {
            content: '';
            display: inline-block;
            background: ${theme.open
                ? theme.colors.success
                : theme.colors.error};
        }

        ${styles[theme.kind](theme)};
    `,
)

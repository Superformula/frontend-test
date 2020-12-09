import styled, { css, ThemeProps } from 'styled-components'

import { Theme } from '~/common'

export interface ToggleTheme extends Theme {
    checked: boolean
}

export const Root = styled.span`
    width: 30px;
    height: 10px;
    border-radius: 5px;
    margin: 10px;
    background: ${({ theme }: ThemeProps<ToggleTheme>) =>
        theme.colors['gray-6']};
    display: block;
    position: relative;
`

export const Handle = styled.span(
    ({ theme }: ThemeProps<ToggleTheme>) => css`
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background: ${theme.checked
            ? theme.colors.success
            : theme.colors['gray-4']};
        display: block;
        position: absolute;
        top: 50%;
        left: ${theme.checked ? 100 : 0}%;
        transform: translate(-50%, -50%);
        transition: left 250ms;
    `,
)

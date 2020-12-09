import styled, { css, ThemeProps } from 'styled-components'

import { Check } from '~/assets'
import { Theme } from '~/common'

export interface CheckboxTheme extends Theme {
    checked: boolean
}

export const Root = styled(Check)(
    ({ theme }: ThemeProps<CheckboxTheme>) => css`
        width: 16px;
        height: 16px;
        padding: ${theme.spacing.xs}px;
        border: 1px solid
            ${theme.checked ? theme.colors.black : theme.colors['gray-5']};
        border-radius: 100%;
        background: ${theme.checked ? theme.colors.black : theme.colors.white};
        fill: ${theme.checked ? theme.colors.white : 'none'};
    `,
)

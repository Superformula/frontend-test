import styled, { css, ThemeProps } from 'styled-components'

import { minWidthStyles, Theme } from '~/common'
import { rem } from 'polished'

export const Root = styled.blockquote`
    margin: 0;
    display: flex;
    flex-direction: column;

    ${minWidthStyles.lg} {
        flex-direction: row;
    }
`

export const Profile = styled.div`
    margin-bottom: ${({ theme }: ThemeProps<Theme>) => theme.spacing.lg}px;
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;

    ${minWidthStyles.lg} {
        margin-bottom: 0;
    }
`

export const AvatarContainer = styled.div`
    width: 64px;
    height: 64px;

    ${minWidthStyles.md} {
        width: 72px;
        height: 72px;
    }

    ${minWidthStyles.xl} {
        width: 80px;
        height: 80px;
    }
`

export const Avatar = styled.img`
    object-fit: cover;
    overflow: hidden;
`

export const Meta = styled.div(
    ({ theme }: ThemeProps<Theme>) => css`
        margin: 0 ${theme.spacing.lg}px;

        ${minWidthStyles.md} {
            margin: 0 ${theme.spacing.lg + theme.spacing.md}px;
        }

        ${minWidthStyles.xl} {
            margin: 0 ${theme.spacing.xxl}px 0 ${theme.spacing.xl}px;
        }
    `,
)

export const Name = styled.cite`
    display: block;
    font-style: normal;
    font-size: ${rem(18)};

    ${minWidthStyles.md} {
        font-size: ${rem(20)};
    }

    ${minWidthStyles.xl} {
        font-size: ${rem(22)};
    }
`

export const Date = styled.time`
    color: ${({ theme }: ThemeProps<Theme>) => theme.colors['gray-2']};
`

export const Content = styled.div`
    ${minWidthStyles.lg} {
        flex: 1 1 auto;
    }
`

export const Message = styled.div``

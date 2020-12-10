import { cover, rem } from 'polished'
import styled, { css, ThemeProps } from 'styled-components'

import { minWidthStyles, Theme } from '~/common'
import { StyledButton } from '../Button'
import { StyledRating } from '../Rating'
import { StyledStatus } from '../Status'

export const Root = styled.article`
    display: flex;
    flex-direction: row;
    position: relative;

    ${minWidthStyles.md} {
        flex-direction: column;
    }
`

export const Thumbnail = styled.div`
    width: 116px;
    position: relative;
    flex: 0 0 auto;

    ${minWidthStyles.md} {
        width: 100%;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    ${cover()};
`

export const Image = styled.img`
    object-fit: cover;
    overflow: hidden;
`

export const Content = styled.div`
    margin-left: ${({ theme }: ThemeProps<Theme>) => theme.spacing.lg}px;
    display: flex;
    flex-direction: column;
    align-items: start;
    flex: 1 1 auto;

    ${StyledRating.Root} {
        font-size: ${rem(12)};
    }

    ${StyledStatus.Root} {
        font-size: ${rem(8)};
    }

    ${minWidthStyles.md} {
        margin-left: 0;
        align-items: stretch;

        ${StyledRating.Root} {
            font-size: ${rem(16)};
        }

        ${StyledStatus.Root} {
            font-size: ${rem(12)};
        }

        ${StyledButton.Root} {
            &::after {
                content: '';
                ${cover()};
            }
        }
    }
`

export const Name = styled.span`
    margin-bottom: 0.25em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: ${rem(20)};
    overflow: hidden;
`

export const Meta = styled.div`
    width: 100%;
    margin-bottom: 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 1 1 auto;
`

export const Details = styled.span`
    text-transform: uppercase;
    font-size: ${rem(12)};
    color: ${({ theme }: ThemeProps<Theme>) => theme.colors['gray-2']};
`

export const Anchor = styled.a(
    ({ theme }: ThemeProps<Theme>) => css`
        border-bottom: 1px solid ${theme.colors['gray-6']};
        text-decoration: none;
        color: ${theme.colors.primary};

        &::after {
            content: '';
            ${cover()};
        }
    `,
)

import { cover, rem } from 'polished'
import styled, { css, ThemeProps } from 'styled-components'

import { minWidthStyles, Theme } from '~/common'
import { StyledButton } from '../Button'
import { StyledCheckbox } from '../Checkbox'
import { StyledContainer } from '../Container'
import { StyledDropdown } from '../Dropdown'

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

export const DesktopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const DesktopFilters = styled.div(
    ({ theme }: ThemeProps<Theme>) => css`
        display: flex;
        flex-direction: row;
        align-items: center;

        & > ${StyledButton.Root} {
            min-width: 100px;
            margin: 0 ${theme.spacing.lg}px;

            ${StyledCheckbox.Root} {
                margin-left: ${theme.spacing.sm}px;
            }
        }

        ${StyledDropdown.Root} {
            border-bottom: 1px solid ${theme.colors['gray-6']};
            margin: 0 ${theme.spacing.lg}px;

            & > ${StyledButton.Root} {
                min-width: 100px;
            }

            ${StyledDropdown.Drop} {
                ${StyledButton.Root} {
                    padding: ${theme.spacing.md}px;
                }

                ${StyledButton.Content} {
                    justify-content: stretch;
                }

                ${StyledCheckbox.Root} {
                    margin-right: ${theme.spacing.sm}px;
                }
            }
        }
    `,
)

export const DesktopActions = styled.div(
    ({ theme }: ThemeProps<Theme>) => css`
        ${StyledButton.Root} {
            padding-top: ${theme.spacing.md}px;
            padding-bottom: ${theme.spacing.md}px;
            font-size: ${rem(12)};
        }
    `,
)

export const MobileContainer = styled.div``

export const MobileModal = styled.div`
    background: ${({ theme }: ThemeProps<Theme>) => theme.colors.white};
    ${cover()};
    position: fixed;
`

export const MobileModalHeader = styled.header(
    ({ theme }: ThemeProps<Theme>) => css`
        padding: ${theme.spacing.lg}px ${theme.spacing.lg + theme.spacing.md}px;
    `,
)

export const MobileModalActions = styled.div(
    ({ theme }: ThemeProps<Theme>) => css`
        padding: ${theme.spacing.lg}px ${theme.spacing.lg + theme.spacing.md}px;
        border-top: 1px solid ${theme.colors['gray-6']};
        border-bottom: 1px solid ${theme.colors['gray-6']};
        display: flex;
        flex-direction: row;

        ${StyledButton.Root} {
            flex: 1 1 auto;

            &:first-child {
                margin-right: ${theme.spacing.md}px;
            }

            &:last-child {
                margin-left: ${theme.spacing.md}px;
            }
        }
    `,
)

export const MobileModalFilters = styled.div(
    ({ theme }: ThemeProps<Theme>) => css`
        padding: ${theme.spacing.lg}px ${theme.spacing.lg + theme.spacing.md}px;
    `,
)

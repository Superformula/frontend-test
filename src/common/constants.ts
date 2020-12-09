import { rem } from 'polished'
import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'

import { BreakpointKey, Breakpoints, MinWidthMediaQueries } from '~/types'

export const GRAPHQL_SCHEMA_URL = process.env.GRAPHQL_SCHEMA_URL
export const YELP_API_KEY = process.env.YELP_API_KEY

export const SSR = typeof window === 'undefined'

export const SSR_BREAKPOINT: BreakpointKey = 'xs'

export const breakpoints: Breakpoints = {
    xxs: 1,
    xs: 321,
    sm: 481,
    md: 769,
    lg: 1025,
    xl: 1201,
    xxl: 1401,
}

export const colors = {
    primary: '#002B56',
    error: '#FF3548',
    success: '#00E8A4',
    black: '#000',
    'gray-1': '#333333',
    'gray-2': '#666666',
    'gray-3': '#757575',
    'gray-4': '#969696',
    'gray-5': '#C8C8C8',
    'gray-6': '#E6E6E6',
    white: '#fff',
}

export const spacing = {
    xxs: 1,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
    xxl: 64,
}

export const theme = {
    breakpoints,
    colors,
    spacing,
}

export type Theme = typeof theme

export const orderedBreakpointKeys = Object.entries(breakpoints)
    .sort(([, a], [, b]) => (a === b ? 0 : a > b ? 1 : -1))
    .map(([breakpoint]) => breakpoint) as BreakpointKey[]

export const minWidthMediaQueries = orderedBreakpointKeys.reduce(
    (mediaQueries, breakpoint) => ({
        ...mediaQueries,
        [breakpoint]: `(min-width: ${breakpoints[breakpoint]}px)`,
    }),
    {} as MinWidthMediaQueries,
)
export const minWidthStyles = Object.entries(minWidthMediaQueries).reduce(
    (mediaQueries, [breakpoint, mediaQuery]) => ({
        ...mediaQueries,
        [breakpoint]: `@media ${mediaQuery}`,
    }),
    {} as MinWidthMediaQueries,
)

export const GlobalStyles = createGlobalStyle`
    ${normalize};

    * {
        &, &::before, &::after {
            box-sizing: border-box;
        }
    }
    
    :focus {
        outline: none;
        box-shadow: 0 0 3px 1.5px ${colors.success};
    }
    
    html {
        font-size: 16px;
    }
    
    body {
        font-family: HelveticaNeue, Helvetica, sans-serif;
        line-height: 1.4;
        letter-spacing: 1px;
    }
    
    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: 0.5em;
        font-weight: 300;
        line-height: 1.2;
    }
    
    h4, h5, h6 {
        font-weight: 600;
    }

    ${[54, 44, 34, 30, 26, 24].map(
        (size, index) => css`
            ${`h${index + 1}`}, .${`h${index + 1}`} {
                font-size: ${rem(size * (3 / 5))};

                ${minWidthStyles.md} {
                    font-size: ${rem(size * (4 / 5))};
                }

                ${minWidthStyles.xl} {
                    font-size: ${rem(size)};
                }
            }
        `,
    )};
    
    p {
        margin-top: 0;
        
        ${minWidthStyles.md} {
            max-width: 600px;
            font-size: ${rem(18)};
        }

        ${minWidthStyles.xl} {
            max-width: 800px;
            font-size: ${rem(20)};
        }

        &.large {
            font-size: ${rem(18)};

            ${minWidthStyles.md} {
                font-size: ${rem(20)};
            }

            ${minWidthStyles.xl} {
                font-size: ${rem(22)};
            }
        }
    }
    
    svg {
        width: 1em;
        display: block;
        fill: currentColor;
    }
    
    ${Object.entries(colors).map(
        ([name, color]) => css`
            .color-${name} {
                color: ${color};
            }
        `,
    )};
`

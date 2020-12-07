import { addDecorator } from '@storybook/react'
import React from 'react'
import { withNextRouter } from 'storybook-addon-next-router'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from '~/common'

const Overrides = createGlobalStyle`
    body {
        padding: 0 !important;
    }
`

addDecorator(withNextRouter)

addDecorator((storyFn) => (
    <>
        <Overrides />
        <GlobalStyles />
        <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
    </>
))

import * as React from 'react'
import Head from 'next/head'
import { DefaultTheme } from 'styled-components'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'
import Sprite from './Sprite'

const theme: DefaultTheme = {
  colors: {
    background: "#FFFFFF",
    white: "#FFFFFF",
    black: "#000000",
    offblack: "#333333",
    darkgray: "#606060",
    arrowgray: "#969696",
    gray: "#666666",
    offgray: "#757575",
    lightgray: "#E6E6E6",
    darkwhite: "#C8C8C8",
    offwhite: "#D8D8D8",
    blue: "#002B56",
    hoverBlue: "#0a4a8a",
    green: "#00E8A4",
    red: "#FF3548"
  },
  transition: "all 150ms ease-in-out"
}

const Theme: React.FunctionComponent = ({ children }) => (
  <>
    <Head>
      <link href="/static/fonts/styles.css" rel="stylesheet" />
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Sprite />
      { children }
    </ThemeProvider>
  </>
)

export default Theme
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GRAPHQL_SCHEMA_URL = process.env.GRAPHQL_SCHEMA_URL
export const YELP_API_KEY = process.env.YELP_API_KEY

export const SSR = typeof window === 'undefined'

export const theme = {}

export const GlobalStyles = createGlobalStyle`
    ${normalize};
`

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { setup } from 'axios-cache-adapter'

const yelpURI = process.env.WEBSITE_API_BASEURL
const yelpHttpLink = createHttpLink({
  uri: yelpURI
})

const yelpAuthLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'Accept-Language': 'en_US',
      authorization: `Bearer ${process.env.YELP_API_KEY}`
    }
  }
})

export const yelpAPI = new ApolloClient({
  ssrMode: true,
  link: yelpAuthLink.concat(yelpHttpLink),
  cache: new InMemoryCache()
})

export const axiosYelpAPI = setup({
  baseURL: yelpURI,
  headers: {
    'Accept-Language': 'en_US',
    authorization: `Bearer ${process.env.YELP_API_KEY}`
  },
  cache: {
    maxAge: 5 * 60 * 1000
  }
})
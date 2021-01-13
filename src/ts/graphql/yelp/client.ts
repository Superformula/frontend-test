// Imports
// -------

// Libraries
import { ApolloClient, InMemoryCache } from "@apollo/client";

// Internal
// --------

const client = new ApolloClient({
    uri: process.env.API_URL,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        'Accept-Language': 'en_US'
    }
});

// Exports
// -------

export default client;

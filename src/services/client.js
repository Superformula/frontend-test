import {InMemoryCache} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import {setContext} from 'apollo-link-context';
import {createHttpLink} from 'apollo-link-http';
import {BEARER_TOKEN} from 'Constants';

const authLink = setContext((_, {headers}) => {
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${BEARER_TOKEN}`,
        },
    };
});

const httpLink = createHttpLink({
    uri: '/v3/graphql',
    headers: {
        'Accept-Language': 'en_US',
    },
});

export const yelpClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    fetchOptions: {
        mode: 'no-cors',
    },
});

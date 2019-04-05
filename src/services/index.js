import {InMemoryCache} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import {setContext} from 'apollo-link-context';
import {createHttpLink} from 'apollo-link-http';
import {BEARER_TOKEN, DEFAULT_LIMIT, DEFAULT_OFFSET} from 'Constants';
import gql from 'graphql-tag';

export const getAlternateLocationData = async () => {
    return fetch('http://ip-api.com/json', {
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(data => data.json());
};

const httpLink = createHttpLink({
    uri: '/v3/graphql',
    headers: {
        'Accept-Language': 'en_US',
    },
});

const authLink = setContext((_, {headers}) => {
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${BEARER_TOKEN}`,
        },
    };
});

const yelpClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    fetchOptions: {
        mode: 'no-cors',
    },
});

const baseSelections = `
            total
            business {
                id
                name
                photos
                rating
                price
                is_closed
                categories {
                    title
                    alias
                }
            }
        `;

const nodeTypeLookup = {
    location: 'String!',
    latitude: 'Float!',
    longitude: 'Float!',
    open_now: 'Boolean!',
};

const buildQuery = (filters = {}) => {
    // console.dir(filters);
    const keys = Object.keys(filters);
    const stringGql = `
        query SearchLimit($limit: Int!,
                          $offset: Int!${keys.length ? ',' : ''}
                          ${keys.map(k => `$${k}: ${nodeTypeLookup[k]}`)}) {
            search(limit: $limit,
                   offset: $offset${keys.length ? ',' : ''} ${keys.map(k => `${k}: $${k}`)}) {
                ${baseSelections}
            }
        }
    `;
    return gql(stringGql);
};

export const getBusinesses = async ({limit = DEFAULT_LIMIT, offset = DEFAULT_OFFSET, ...filters}) => {
    return yelpClient.query({
        query: buildQuery(filters),
        variables: {limit, offset, ...filters},
    });
};

import {InMemoryCache} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import {setContext} from 'apollo-link-context';
import {createHttpLink} from 'apollo-link-http';
import {BEARER_TOKEN, DEFAULT_LIMIT, DEFAULT_OFFSET} from 'Constants';
import gql from 'graphql-tag';

export const getThirdPartyLocationData = async () => {
    return fetch('/json', {
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

const businessSelections = `  
id
name
photos
rating
price
location {
  address1
  address2
  address3
  city
  state
  postal_code
}
is_closed
categories {
  title
  alias
}
`;

const searchSelections = `
total
business {
    ${businessSelections}
}
`;

const nodeTypeLookup = {
    location: 'String!',
    latitude: 'Float!',
    longitude: 'Float!',
    open_now: 'Boolean',
    price: 'String',
    categories: 'String',
};

const buildBusinessesQuery = (filters = {}) => {
    if (filters.price) {
        if (filters.price.toLowerCase() === 'all') {
            filters.price = null;
        } else {
            filters.price = filters.price.length;
        }
    }
    const keys = Object.keys(filters);
    const stringGql = `
        query SearchLimit($limit: Int!,
                          $offset: Int!${keys.length ? ',' : ''}
                          ${keys.map(k => `$${k}: ${nodeTypeLookup[k]}`)}) {
            search(limit: $limit,
                   offset: $offset${keys.length ? ',' : ''} ${keys.map(k => `${k}: $${k}`)}) {
                ${searchSelections}
            }
        }
    `;
    return gql(stringGql);
};

const buildBusinessQuery = () => {
    const stringGql = `
        query GetBusiness($id: String!) {
            business(id: $id) {
                ${businessSelections}
            }
        }
    `;
    return gql(stringGql);
};

export const getBusinesses = async ({limit = DEFAULT_LIMIT, offset = DEFAULT_OFFSET, ...filters}) => {
    return yelpClient.query({
        query: buildBusinessesQuery(filters),
        variables: {limit, offset, ...filters},
    });
};

export const getBusiness = async ({businessId}) => {
    return yelpClient.query({
        query: buildBusinessQuery(),
        variables: {id: businessId},
    });
};

export const getCategories = async () => {
    return fetch('/v3/categories', {
        headers: new Headers({
            'Authorization': `Bearer ${BEARER_TOKEN}`,
        }),
    }).then(resp => resp.json());
};

export const getReviews = async ({businessId, limit = DEFAULT_LIMIT, offset = DEFAULT_OFFSET}) => {
    return yelpClient.query({
        query: gql`
            query FindReviews($limit: Int!, $offset: Int!, $businessId: String!) {
                reviews(business: $businessId, limit: $limit, offset: $offset) {
                    total
                    review {
                        id
                        rating
                        text
                        time_created
                        user {
                            name
                            image_url
                            id
                        }
                    }
                }
            }
        `,
        variables: {limit, offset, businessId},
    });
};

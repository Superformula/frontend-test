import gql from 'graphql-tag';

const businessSelections = `  
id
name
photos
rating
hours {
  is_open_now
}
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

export const buildBusinessesQuery = (filters = {}) => {
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

export const buildBusinessQuery = () => {
    const stringGql = `
        query GetBusiness($id: String!) {
            business(id: $id) {
                ${businessSelections}
            }
        }
    `;
    return gql(stringGql);
};

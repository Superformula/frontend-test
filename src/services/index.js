import {BEARER_TOKEN, DEFAULT_LIMIT, DEFAULT_OFFSET} from 'Constants';
import gql from 'graphql-tag';
import {yelpClient} from 'Services/client';
import {buildBusinessesQuery, buildBusinessQuery} from 'Services/query';

export const getBusiness = async ({businessId}) => {
    return yelpClient.query({
        query: buildBusinessQuery(),
        variables: {id: businessId},
    });
};

export const getBusinesses = async ({limit = DEFAULT_LIMIT, offset = DEFAULT_OFFSET, ...filters}) => {
    return yelpClient.query({
        query: buildBusinessesQuery(filters),
        variables: {limit, offset, ...filters},
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

export const getThirdPartyLocationData = async () => {
    return fetch('/json', {
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(data => data.json());
};

// This fails on certain browsers...some chromium bug.  We have alternatives though...
export function updatePosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 200, // 200ms timeout window
            maximumAge: 75000, // 1:15 min
            enableHighAccuracy: true,
        });
    });
}

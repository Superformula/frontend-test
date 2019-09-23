const QUERY_BASE = '/v3/businesses';
const SEARCH_QUERY = 'search?location=Las Vegas';
const API_KEY =
    'iKjzqtCSUNKhDGTKO5eVp43jSZOW5rstarKcFna4g3OiU3owt4hSSsQM7qzaZkr6o-_97yDEMs9der7ovIieC-M_IoKRMNmiY-eEUalSCJaIeYI-NUfcreJPPFTOW3Yx';
const headers = new Headers({
    Authorization: `Bearer ${API_KEY}`
});
export const getRestaurants = offset => {
    return fetch(`${QUERY_BASE}/${SEARCH_QUERY}&offset=${offset}`, {
        headers
    })
        .then(res => res.json())
        .then(res => {
            const restaurantFetches = res.businesses.map(restaurantDetails => {
                return getRestaurantDetails(restaurantDetails.id);
            });
            // TODO Promise.all here sometimes causes the API to error with "too many requests per second",
            // so fetching sequentially instead...
            return restaurantFetches.reduce((promiseChain, currentFetch) => {
                return promiseChain.then(chainResults =>
                    currentFetch.then(currentResult => [...chainResults, currentResult])
                );
            }, Promise.resolve([]));
        })
        .then(restaurants => {
            return restaurants;
        })
        .catch(err => {
            console.log('error fetching restaurants', err);
            // TODO error view state
        });
};
export const getRestaurantDetails = id => {
    return fetch(`${QUERY_BASE}/${id}`, { headers }).then(res => res.json());
};
export const getCategories = () => {
    return fetch('/v3/categories', {
        headers
    })
        .then(res => res.json())
        .then(res => {
            return res.categories.filter(category => category.parent_aliases[0] === 'restaurants');
        });
};

export const getReviews = id => {
    return fetch(`${QUERY_BASE}/${id}/reviews`, {
        headers
    })
        .then(res => res.json())
        .then(res => {
            return res.reviews;
        });
};

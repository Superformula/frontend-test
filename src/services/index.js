const QUERY_BASE = '/v3/businesses';
const SEARCH_QUERY = 'search?location=Las Vegas';
const API_KEY =
	'iKjzqtCSUNKhDGTKO5eVp43jSZOW5rstarKcFna4g3OiU3owt4hSSsQM7qzaZkr6o-_97yDEMs9der7ovIieC-M_IoKRMNmiY-eEUalSCJaIeYI-NUfcreJPPFTOW3Yx';
const headers = {
	Authorization: `Bearer ${API_KEY}`
};
export const fetchRestaurantDetails = id => {
	return fetch(`${QUERY_BASE}/${id}`, { headers }).then(res => res.json());
};
export const fetchRestaurants = offset => {
	return fetch(`${QUERY_BASE}/${SEARCH_QUERY}&offset=${offset}`, {
		headers
	})
		.then(res => res.json())
		.then(res => {
			const restaurantFetches = res.businesses.map(restaurantDetails => {
				return fetchRestaurantDetails(restaurantDetails.id).then(restaurant => {
					// Quick and dirty - the API sometimes gets an error for an individual business,
					if (!restaurant.error) {
						return restaurant;
					}
					//  so we explicity set it null.....
					return null;
				});
			});
			return Promise.all(restaurantFetches);
		})
		.then(restaurants => {
			// .... and then filter it out of the good results.
			return restaurants.filter(restaurant => restaurant !== null);
		});
};
export const fetchReviews = id => {
	return fetch(`${QUERY_BASE}/${id}/reviews`, {
		headers
	})
		.then(res => res.json())
		.then(res => {
			return res.reviews;
		});
};

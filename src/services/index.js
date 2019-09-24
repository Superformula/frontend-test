const QUERY_BASE = '/v3/businesses';
const SEARCH_QUERY = 'search?location=Las Vegas';
const API_KEY =
	'iKjzqtCSUNKhDGTKO5eVp43jSZOW5rstarKcFna4g3OiU3owt4hSSsQM7qzaZkr6o-_97yDEMs9der7ovIieC-M_IoKRMNmiY-eEUalSCJaIeYI-NUfcreJPPFTOW3Yx';
const headers = new Headers({
	Authorization: `Bearer ${API_KEY}`
});
export const fetchRestaurantDetails = id => {
	return fetch(`${QUERY_BASE}/${id}`, { headers }).then(res => res.json());
};
export const fetchRestaurants = offset => {
	return fetch(`${QUERY_BASE}/${SEARCH_QUERY}&offset=${offset}`, {
		headers
	})
		.then(res => res.json())
		.then(res => {
			console.log('fetchRestaurants res', res);
			const restaurantFetches = res.businesses.map(restaurantDetails => {
				return fetchRestaurantDetails(restaurantDetails.id).then(restaurant => {
					if (!restaurant.error) {
						return restaurant;
					}
					console.log('error loading restaurant');
					return null;
				});
			});
			return Promise.all(restaurantFetches);
		})
		.then(restaurants => {
			return restaurants.filter(restaurant => restaurant !== null);
		})
		.catch(err => {
			console.log('error fetching restaurants', err);
			// TODO error view state
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

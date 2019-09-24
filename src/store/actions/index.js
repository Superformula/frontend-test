export const FETCH_RESTAURANTS_LOADING = 'FETCH_RESTAURANTS_LOADING';
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const FETCH_REVIEWS_LOADING = 'FETCH_REVIEWS_LOADING';
export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
export const FETCH_RESTAURANT_DETAILS_LOADING = 'FETCH_RESTAURANT_DETAILS_LOADING';
export const FETCH_RESTAURANT_DETAILS_SUCCESS = 'FETCH_RESTAURANT_DETAILS_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const OPEN_NOW_CHANGED = 'OPEN_NOW_CHANGED';
export const SELECTED_PRICE_CHANGED = 'SELECTED_PRICE_CHANGED';
export const SELECTED_CATEGORY_CHANGED = 'SELECTED_CATEGORY_CHANGED';
export const QUERY_OFFSET_CHANGED = 'QUERY_OFFSET_CHANGED';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const CLEAR_RESTAURANTS = 'CLEAR_RESTAURANTS';

export const OFFSET_INCREMENT = 20;

import businesses from '../../tests/data/businesses';
import state1 from '../../tests/data/state-1';

import { fetchRestaurants, fetchRestaurantDetails, fetchReviews } from '../../services';

export const loadError = error => {
	return {
		type: FETCH_ERROR,
		value: error
	};
};

export const getRestaurants = (offset = 0) => {
	// return dispatch => {
	// 	dispatch({
	// 		type: FETCH_RESTAURANTS_SUCCESS,
	// 		value: businesses
	// 	});
	// };
	return dispatch => {
		dispatch({
			type: FETCH_RESTAURANTS_LOADING,
			value: true
		});
		fetchRestaurants(offset)
			.then(restaurants => {
				dispatch({
					type: FETCH_RESTAURANTS_SUCCESS,
					value: restaurants
				});
				dispatch({
					type: QUERY_OFFSET_CHANGED,
					value: offset + OFFSET_INCREMENT
				});
			})
			.catch(err => {
				dispatch(loadError(err));
			});
	};
};

export const getRestaurantDetails = id => {
	// return dispatch => {
	// 	dispatch({
	// 		type: FETCH_RESTAURANT_DETAILS_SUCCESS,
	// 		value: state1.restaurantDetails
	// 	});
	// };
	return dispatch => {
		dispatch({ type: FETCH_RESTAURANT_DETAILS_LOADING, value: true });
		fetchRestaurantDetails(id).then(details => {
			dispatch({
				type: FETCH_RESTAURANT_DETAILS_SUCCESS,
				value: details
			});
		});
	};
};

export const getReviews = id => {
	// return dispatch => {
	// 	dispatch({
	// 		type: FETCH_REVIEWS_SUCCESS,
	// 		value: state1.reviews
	// 	});
	// };
	return dispatch => {
		dispatch({ type: FETCH_REVIEWS_LOADING, value: true });
		fetchReviews(id).then(reviews => {
			dispatch({
				type: FETCH_REVIEWS_SUCCESS,
				value: reviews
			});
		});
	};
};

export const queryOffsetChanged = offset => {
	return {
		type: QUERY_OFFSET_CHANGED,
		value: offset
	};
};

export const openNowChanged = openNow => {
	return {
		type: OPEN_NOW_CHANGED,
		value: openNow
	};
};

export const selectedPriceChanged = selectedPrice => {
	return {
		type: SELECTED_PRICE_CHANGED,
		value: selectedPrice
	};
};

export const selectedCategoryChanged = selectedCategory => {
	return {
		type: SELECTED_CATEGORY_CHANGED,
		value: selectedCategory
	};
};

export const clearRestaurants = () => {
	return {
		type: CLEAR_RESTAURANTS
	};
};

export const clearFilters = () => {
	return {
		type: CLEAR_FILTERS
	};
};

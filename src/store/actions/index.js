import {
	FETCH_RESTAURANTS_LOADING,
	FETCH_RESTAURANTS_SUCCESS,
	FETCH_REVIEWS_LOADING,
	FETCH_REVIEWS_SUCCESS,
	FETCH_RESTAURANT_DETAILS_LOADING,
	FETCH_RESTAURANT_DETAILS_SUCCESS,
	OPEN_NOW_CHANGED,
	SELECTED_PRICE_CHANGED,
	SELECTED_CATEGORY_CHANGED,
	QUERY_OFFSET_CHANGED,
	CLEAR_FILTERS,
	CLEAR_RESTAURANTS,
	FETCH_ERROR
} from '../constants';

export const OFFSET_INCREMENT = 20;

import { fetchRestaurants, fetchRestaurantDetails, fetchReviews } from '../../services';

export const loadError = error => {
	return {
		type: FETCH_ERROR,
		value: error
	};
};

export const getRestaurants = (offset = 0) => {
	return dispatch => {
		dispatch({
			type: FETCH_RESTAURANTS_LOADING,
			value: true
		});
		return fetchRestaurants(offset)
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
	return dispatch => {
		dispatch({ type: FETCH_RESTAURANT_DETAILS_LOADING, value: true });
		return fetchRestaurantDetails(id).then(details => {
			dispatch({
				type: FETCH_RESTAURANT_DETAILS_SUCCESS,
				value: details
			});
		});
	};
};

export const getReviews = id => {
	return dispatch => {
		dispatch({ type: FETCH_REVIEWS_LOADING, value: true });
		return fetchReviews(id).then(reviews => {
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

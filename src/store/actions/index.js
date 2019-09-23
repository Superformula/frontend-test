export const RESTAURANTS_LOADING = 'RESTAURANTS_LOADING';
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const REVIEWS_LOADING = 'REVIEWS_LOADING';
export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
export const RESTAURANT_DETAILS_LOADING = 'RESTAURANT_DETAILS_LOADING';
export const FETCH_RESTAURANT_DETAILS_SUCCESS = 'FETCH_RESTAURANT_DETAILS_SUCCESS';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const LOAD_ERROR = 'LOAD_ERROR';
export const OPEN_NOW_CHANGED = 'OPEN_NOW_CHANGED';
export const SELECTED_PRICE_CHANGED = 'SELECTED_PRICE_CHANGED';
export const SELECTED_CATEGORY_CHANGED = 'SELECTED_CATEGORY_CHANGED';
export const QUERY_OFFSET_CHANGED = 'QUERY_OFFSET_CHANGED';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

import businesses from '../../tests/data/businesses';
import state1 from '../../tests/data/state-1';

import { getCategories, getRestaurants, getRestaurantDetails, getReviews } from '../../services';

export const fetchCategories = () => {
    return dispatch => {
        getCategories().then(categories => {
            dispatch({
                type: FETCH_CATEGORIES_SUCCESS,
                value: categories
            });
        });
    };
};

export const fetchRestaurants = (offset = 0) => {
    return dispatch => {
        dispatch({
            type: FETCH_RESTAURANTS_SUCCESS,
            value: businesses
        });
    };
    return dispatch => {
        dispatch({
            type: RESTAURANTS_LOADING,
            value: true
        });
        getRestaurants(offset)
            .then(restaurants => {
                dispatch({
                    type: FETCH_RESTAURANTS_SUCCESS,
                    value: restaurants
                });
            })
            .catch(err => {
                dispatch(loadError(err));
            });
    };
};

export const fetchRestaurantDetails = id => {
    console.log('state1', state1);
    console.log('restaurantDetails', state1.restaurantDetails);
    return dispatch => {
        dispatch({
            type: FETCH_RESTAURANT_DETAILS_SUCCESS,
            value: state1.restaurantDetails
        });
    };
    return dispatch => {
        dispatch({ type: RESTAURANT_DETAILS_LOADING, value: true });
        getRestaurantDetails(id).then(details => {
            dispatch({
                type: FETCH_RESTAURANT_DETAILS_SUCCESS,
                value: details
            });
        });
    };
};

export const fetchReviews = id => {
    return dispatch => {
        dispatch({
            type: FETCH_REVIEWS_SUCCESS,
            value: state1.reviews
        });
    };
    return dispatch => {
        dispatch({ type: REVIEWS_LOADING, value: true });
        getReviews(id).then(reviews => {
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

export const loadError = error => {
    return {
        type: LOAD_ERROR,
        value: error
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

export const clearFilters = () => {
    return {
        type: CLEAR_FILTERS
    };
};

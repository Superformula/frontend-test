import { toFetchActionTypes } from '../reducers/reducerUtils/FetchReducer';

export const YelpActionTypes = {
    FETCH_CATEGORIES_START: 'FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_ERROR: 'FETCH_CATEGORIES_ERROR',

    FETCH_RESTAURANTS_START: 'FETCH_RESTAURANTS_START',
    FETCH_RESTAURANTS_SUCCESS: 'FETCH_RESTAURANTS_SUCCESS',
    FETCH_RESTAURANTS_ERROR: 'FETCH_RESTAURANTS_ERROR',
};

export const fetchCategoriesActionTypes = toFetchActionTypes([
    YelpActionTypes.FETCH_CATEGORIES_START,
    YelpActionTypes.FETCH_CATEGORIES_SUCCESS,
    YelpActionTypes.FETCH_CATEGORIES_ERROR
]);

export const fetchRestaurantsActionTypes = toFetchActionTypes([
    YelpActionTypes.FETCH_RESTAURANTS_START,
    YelpActionTypes.FETCH_RESTAURANTS_SUCCESS,
    YelpActionTypes.FETCH_RESTAURANTS_ERROR
]);
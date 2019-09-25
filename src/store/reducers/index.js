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

const initialState = {
	restaurantsLoading: true,
	restaurantDetailsLoading: true,
	reviewsLoading: true,
	categories: [],
	restaurants: [],
	restaurantDetails: {},
	reviews: [],
	openNow: true,
	queryOffset: 0,
	selectedPrice: 'all',
	selectedCategory: 'all',
	appError: false
};

function appReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_ERROR:
			return { ...state, appError: true };
		case OPEN_NOW_CHANGED:
			return { ...state, openNow: action.value };
		case FETCH_RESTAURANTS_LOADING:
			return { ...state, restaurantsLoading: true };
		case FETCH_RESTAURANTS_SUCCESS:
			return { ...state, restaurantsLoading: false, restaurants: [...state.restaurants].concat(action.value) };
		case FETCH_REVIEWS_LOADING:
			return { ...state, reviewsLoading: true };
		case FETCH_REVIEWS_SUCCESS:
			return { ...state, reviewsLoading: false, reviews: action.value };
		case FETCH_RESTAURANT_DETAILS_LOADING:
			return { ...state, restaurantDetailsLoading: true };
		case FETCH_RESTAURANT_DETAILS_SUCCESS:
			return { ...state, restaurantDetailsLoading: false, restaurantDetails: action.value };
		case SELECTED_PRICE_CHANGED:
			return { ...state, selectedPrice: action.value };
		case SELECTED_CATEGORY_CHANGED:
			return { ...state, selectedCategory: action.value };
		case QUERY_OFFSET_CHANGED:
			return { ...state, queryOffset: action.value };
		case CLEAR_FILTERS:
			return { ...state, categories: [], openNow: true, selectedPrice: 'all', selectedCategory: 'all' };
		case CLEAR_RESTAURANTS:
			return { ...state, restaurants: [], queryOffset: 0 };
		default:
			return state;
	}
}

export default appReducer;

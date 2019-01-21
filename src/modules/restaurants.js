import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

import * as constants from '../constants';
import request from '../helpers/request';

// Action Creators
const fetchRestaurantsRequest = createAction('RESTAURANTS_FETCH_REQUEST');
const fetchRestaurantsResponse = createAction('RESTAURANTS_FETCH_RESPONSE');

export const fetchRestaurants = params => (dispatch) => {
  const queryObject = { ...{ location: constants.DEFAULT_LOCATION, term: 'restaurants', limit: 8 }, ...params };
  const queryString = Object.keys(queryObject).map((filter) => {
    if (queryObject[filter]) {
      return `${filter}=${queryObject[filter]}`;
    }
    return null;
  }).filter(item => item).join('&');
  dispatch(fetchRestaurantsRequest());
  request({ url: `${constants.API_URL}businesses/search?${queryString}` })
    .then((response) => {
      dispatch(fetchRestaurantsResponse(response));
    })
    .catch((err) => {
      dispatch(fetchRestaurantsResponse(err));
    });
};

// Reducers
const loading = handleActions({
  [fetchRestaurantsRequest]() {
    return true;
  },
  [fetchRestaurantsResponse]() {
    return false;
  },
}, true);

const data = handleActions({
  [fetchRestaurantsResponse]: {
    next(state, { payload }) {
      if (state && state.businesses) {
        const { businesses } = state;
        return {
          ...state,
          businesses: [
            ...businesses,
            ...payload.businesses,
          ],
        };
      }
      return payload;
    },
  },
}, {});

const error = handleActions({
  [fetchRestaurantsResponse]: {
    next() {
      return null;
    },
    throw(state, { payload: { message } }) {
      return message;
    },
  },
}, null);

export default combineReducers({
  error,
  loading,
  data,
});

// Selectors
export const getRestaurants = state => state.restaurants.data;
export const getRestaurantsError = state => state.restaurants.error;
export const getRestaurantsLoading = state => state.restaurants.loading;

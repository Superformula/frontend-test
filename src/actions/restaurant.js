import api from 'api';
import { sleep } from 'helpers/sleep';
import ENV from 'helpers/env';
import { buildQueryObject } from 'reducers/helpers';
import { getFilters } from 'selectors';

const { YELP_API_ROOT } = ENV;

export const FETCH_RESTAURANTS_START = 'FETCH_RESTAURANTS_START';
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const FETCH_RESTAURANTS_ERROR = 'FETCH_RESTAURANTS_ERROR';

export const FETCH_RESTAURANT_START = 'FETCH_RESTAURANT_START';
export const FETCH_RESTAURANT_SUCCESS = 'FETCH_RESTAURANT_SUCCESS';
export const FETCH_RESTAURANT_ERROR = 'FETCH_RESTAURANT_ERROR';

export const FETCH_RESTAURANT_REVIEWS_START = 'FETCH_RESTAURANT_REVIEWS_START';
export const FETCH_RESTAURANT_REVIEWS_SUCCESS =  'FETCH_RESTAURANT_REVIEWS_SUCCESS'; // eslint-disable-line
export const FETCH_RESTAURANT_REVIEWS_ERROR = 'FETCH_RESTAURANT_REVIEWS_ERROR';

export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const RESET_FILTERS = 'RESET_FILTERS';

export function getRestaurants() {
  return async (dispatch, getState) => {
    dispatch({
      type: FETCH_RESTAURANTS_START,
    });

    await sleep(500);

    const filters = getFilters(getState());

    try {
      const { data } = await api.get(`${YELP_API_ROOT}/businesses/search`, {
        params: buildQueryObject(filters),
      });
      return dispatch({
        type: FETCH_RESTAURANTS_SUCCESS,
        data,
      });
    } catch (error) {
      return dispatch({
        type: FETCH_RESTAURANTS_ERROR,
        error,
      });
    }
  };
}

export function getRestaurant(id) {
  return async (dispatch) => {
    dispatch({
      type: FETCH_RESTAURANT_START,
    });

    await sleep(500);

    try {
      const { data } = await api.get(`${YELP_API_ROOT}/businesses/${id}`);
      return dispatch({
        type: FETCH_RESTAURANT_SUCCESS,
        data,
      });
    } catch (error) {
      return dispatch({
        type: FETCH_RESTAURANT_ERROR,
        error,
      });
    }
  };
}

export function getRestaurantReviews(id) {
  return async (dispatch) => {
    dispatch({
      type: FETCH_RESTAURANT_REVIEWS_START,
    });

    await sleep(500);

    try {
      const { data } = await api.get(
        `${YELP_API_ROOT}/businesses/${id}/reviews`,
      );
      return dispatch({
        type: FETCH_RESTAURANT_REVIEWS_SUCCESS,
        data,
      });
    } catch (error) {
      return dispatch({
        type: FETCH_RESTAURANT_REVIEWS_ERROR,
        error,
      });
    }
  };
}

export function toggleFilter(filter, value) {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_FILTER,
      filter,
      value,
    });

    dispatch(getRestaurants());
  };
}

export function resetFilters() {
  return async (dispatch) => {
    await dispatch({
      type: RESET_FILTERS,
    });

    dispatch(getRestaurants());
  };
}

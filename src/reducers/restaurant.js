import * as ACTIONS from 'actions/restaurant';

import Helpers from 'reducers/helpers';

const initialState = {
  isFetching: false,
  restaurants: [],
  restaurant: {},
  reviews: [],
  filters: {
    location: 'Las Vegas', // hardcoding here; TODO: add searchable field
  },
};

const actionsMap = {
  [ACTIONS.FETCH_RESTAURANTS_START]: (state, { data }) => {
    const nextState = Object.assign({}, state, {
      isFetching: true,
    });

    return nextState;
  },
  [ACTIONS.FETCH_RESTAURANT_START]: (state, { data }) => {
    const nextState = Object.assign({}, state, {
      isFetching: true,
    });

    return nextState;
  },
  [ACTIONS.FETCH_RESTAURANT_REVIEWS_START]: (state, { data }) => {
    const nextState = Object.assign({}, state, {
      isFetching: true, // TODO: consider using a separate reducer or key for reviews loading
    });

    return nextState;
  },
  [ACTIONS.FETCH_RESTAURANT_START]: (state, { data }) => {
    const nextState = Object.assign({}, state, {
      isFetching: true,
    });

    return nextState;
  },
  [ACTIONS.FETCH_RESTAURANTS_SUCCESS]: (state, { data }) => {
    const nextState = Object.assign({}, state, {
      restaurants: data.businesses,
      isFetching: false,
    });

    return nextState;
  },
  [ACTIONS.FETCH_RESTAURANT_SUCCESS]: (state, { data }) => {
    const nextState = Object.assign({}, state, {
      restaurant: data,
      isFetching: false,
    });

    return nextState;
  },
  [ACTIONS.FETCH_RESTAURANT_REVIEWS_SUCCESS]: (state, { data }) => {
    const nextState = Object.assign({}, state, {
      reviews: data.reviews,
      isFetching: false,
    });

    return nextState;
  },
  [ACTIONS.TOGGLE_FILTER]: (state, { filter, value }) => {
    const nextState = Object.assign({}, state, {
      filters: Helpers.toggleFilter(state, filter, value),
    });

    return nextState;
  },
  [ACTIONS.RESET_FILTERS]: (state) => {
    const nextState = Object.assign({}, state, {
      filters: { ...initialState.filters },
    });

    return nextState;
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}

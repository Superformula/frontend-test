import { Map } from 'immutable';
import * as ACTIONS from 'actions/restaurant';

import Helpers from 'reducers/helpers';

const initialState = Map({
  isFetching: false,
  restaurants: [],
  restaurant: {},
  reviews: [],
  filters: {
    location: 'Las Vegas', // hardcoding here; TODO: add searchable field
  },
});

const actionsMap = {
  [ACTIONS.FETCH_RESTAURANTS_START]: (state) => {
    const nextState = state.merge(Map({ isFetching: true }));
    return nextState;
  },
  [ACTIONS.FETCH_RESTAURANT_START]: (state) => {
    const nextState = state.merge(Map({ isFetching: true }));
    return nextState;
  },
  [ACTIONS.FETCH_RESTAURANT_REVIEWS_START]: (state) => {
    const nextState = state.merge(Map({ isFetching: true }));
    return nextState;
  },
  [ACTIONS.FETCH_RESTAURANT_START]: (state) => {
    const nextState = state.merge(Map({ isFetching: true }));
    return nextState;
  },
  [ACTIONS.FETCH_RESTAURANTS_SUCCESS]: (state, { data }) => {
    const nextState = state.merge(
      Map({
        restaurants: data.businesses,
        isFetching: false,
      }),
    );
    return nextState;
  },
  [ACTIONS.FETCH_RESTAURANT_SUCCESS]: (state, { data }) => {
    const nextState = state.merge(
      Map({
        restaurant: data,
        isFetching: false,
      }),
    );
    return nextState;
  },
  [ACTIONS.FETCH_RESTAURANT_REVIEWS_SUCCESS]: (state, { data }) => {
    const nextState = state.merge(
      Map({
        reviews: data.reviews,
        isFetching: false,
      }),
    );

    return nextState;
  },
  [ACTIONS.TOGGLE_FILTER]: (state, { filter, value }) => {
    const nextState = state.merge(
      Map({
        filters: Helpers.toggleFilter(state, filter, value),
      }),
    );
    return nextState;
  },
  [ACTIONS.RESET_FILTERS]: (state) => {
    const nextState = state.merge(
      Map({
        filters: initialState.get('filters'),
      }),
    );
    return nextState;
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}

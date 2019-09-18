import { createSelector } from 'reselect';

const restaurantsLoadingSelector = state => state.restaurantsLoading;

const restaurantsLoadingSelector = createSelector(state => state.restaurantsLoading);

import { combineReducers } from 'redux';
import restaurants from '../modules/restaurants';

const reducers = {
  restaurants,
};

export default combineReducers(reducers);

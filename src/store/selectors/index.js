import {REDUX_KEYS} from '../../constants';

export const selectBusinesses = state => state[REDUX_KEYS.BUSINESSES].toJS();
export const selectFilters = state => state[REDUX_KEYS.FILTERS].toJS();
export const selectLocation = state => {
    const loc = state[REDUX_KEYS.LOCATION].toJS();
    return {...loc};
};

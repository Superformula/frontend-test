import {REDUX_KEYS} from '../../constants';

export const selectBusinesses = state => state[REDUX_KEYS.BUSINESSES].toJS().businesses;
export const selectLoading = state => state[REDUX_KEYS.BUSINESSES].toJS().loading;
export const selectFilters = state => state[REDUX_KEYS.FILTERS].toJS();
export const selectCategories = state => state[REDUX_KEYS.CATEGORIES].toJS().categories;
export const selectLocation = state => {
    const loc = state[REDUX_KEYS.LOCATION].toJS();
    return {...loc};
};

const memoizedSearchCategories = () => {
    let cache = {};
    return (state) => (k) => {
        if (k in cache) {
            return cache[k];
        } else {
            const r = state[REDUX_KEYS.CATEGORIES].toJS().categories.filter(c => c.alias.includes(k));
            cache[k] = r;
            return r;
        }
    };
};

export const searchCategories = memoizedSearchCategories();

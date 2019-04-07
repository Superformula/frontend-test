import {REDUX_KEYS} from '../../constants';

export const selectBusinesses = state => state[REDUX_KEYS.BUSINESSES].toJS().businesses;
export const selectLoading = state => state[REDUX_KEYS.BUSINESSES].toJS().loading;
export const selectFilters = state => state[REDUX_KEYS.FILTERS].toJS();
export const selectCategories = state => state[REDUX_KEYS.CATEGORIES].toJS().categories;
export const selectLocation = state => {
    const loc = state[REDUX_KEYS.LOCATION].toJS();
    return {...loc};
};

const memoizedSearch = (selector, predicate) => {
    let cache = {};
    return [state => param => {
        if (param in cache) return cache[param];
        else {
            const r = selector(state).find(predicate(param));
            if (r) cache[param] = r;
            return r;
        }
    }, () => cache = {}];
};

export const [selectCategory, clearCategoryCache] = memoizedSearch(selectCategories, alias => c => c.alias.includes(alias));
export const [selectBusiness, clearBusinessCache] = memoizedSearch(selectBusinesses, name => b => b.name.includes(name));


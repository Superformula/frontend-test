import {REDUX_KEYS} from '../../constants';

export const selectBusinesses = state => state[REDUX_KEYS.BUSINESSES].toJS().businesses;
export const selectBusinessesLoading = state => state[REDUX_KEYS.BUSINESSES].toJS().loading;
export const selectBusinessLoading = state => state[REDUX_KEYS.BUSINESSES].toJS().loadingSingle;
export const selectNotFound = state => state[REDUX_KEYS.BUSINESSES].toJS().notFound;
export const selectReviews = state => state[REDUX_KEYS.REVIEWS].toJS().reviews;
export const selectReviewsLoading = state => state[REDUX_KEYS.REVIEWS].toJS().loading;
export const selectReviewsTotal = state => state[REDUX_KEYS.REVIEWS].toJS().total;
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
export const [selectBusiness, clearBusinessCache] = memoizedSearch(selectBusinesses, id => b => b.id === id);


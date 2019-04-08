import keymirror from 'keymirror';

const signals = Object.freeze(keymirror({
    // Category signals
    CATEGORIES_LOADING: null,
    CATEGORIES_LOADED: null,

    // Business signals
    LOAD_BUSINESS: null,
    BUSINESS_LOADING: null,
    BUSINESS_LOADED: null,
    BUSINESS_NOT_FOUND: null,
    BUSINESSES_LOADING: null,
    BUSINESSES_LOADED: null,

    // Review signals
    GET_REVIEWS: null,
    REVIEWS_LOADING: null,
    REVIEWS_LOADED: null,

    // Pagination signals
    UPDATE_PAGE: null,
    PAGE_CHANGED: null,

    // Location signals
    LOCATION_UPDATED: null,
    STORE_LOCATION: null,
    UPDATE_LOCATION: null,

    // Filter signals
    UPDATE_FILTERS: null,
}));

export default signals;

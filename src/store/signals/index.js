import keymirror from 'keymirror';

const signals = Object.freeze(keymirror({
    // Restaurant signals
    BUSINESSES_LOADING: null,
    BUSINESSES_LOADED: null,

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

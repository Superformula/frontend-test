function loadBusinessesAction(category) {
    return { type: 'LOAD_BUSINESSES', category };
}

function loadedBusinesses(businesses, total) {
    return { type: 'LOADED_BUSINESSES', businesses, total };
}

function loadBusinessesError(error) {
    return { type: 'LOAD_BUSINESSES_ERROR', error };
}

export function loadBusinesses() {
    return (dispatch, getState) => {
        const category = getState().businesses.category;
        const query = category ? `&categories=${category}` : '';
        dispatch(loadBusinessesAction(category));
        return fetch(`/api/businesses/search?term=restaurants&location=Las+Vegas${query}`)
            .then(async res => {
                const results = await res.json();
                dispatch(loadedBusinesses(results.businesses, results.total));
            })
            .catch(err => dispatch(loadBusinessesError(err)));
    };
}

export function setCategoryAction(category) {
    return { type: 'FILTER_CATEGORY', category };
}

export function setCategory(category) {
    return dispatch => {
       dispatch(setCategoryAction(category));
       dispatch(loadBusinesses());
    };
}

export function setOpen(open) {
    return { type: 'FILTER_OPEN', open };
}

export function setPrice(price) {
    return { type: 'FILTER_PRICE', price };
}

const defaultNotice = Object.freeze({
    businesses: [],
    category: '',
    error: undefined,
    loading: false,
    onlyOpen: false,
    price: 0,
    total: 0
});

export function reducer(state = defaultNotice, action) {
    switch (action.type) {
        case 'LOAD_BUSINESSES':
            return { ...state, loading: true, error: undefined };
        case 'LOADED_BUSINESSES':
            return { ...state, businesses: action.businesses, total: action.total, loading: false };
        case 'LOAD_BUSINESSES_ERROR':
            return { ...state, error: action.error, loading: false };
        case 'FILTER_CATEGORY':
            return { ...state, category: action.category };
        case 'FILTER_OPEN':
            return { ...state, onlyOpen: action.open };
        case 'FILTER_PRICE':
            return { ...state, price: action.price };
    }
    return state;
}

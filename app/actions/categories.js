function loadCategoriesAction() {
    return { type: 'LOAD_CATEGORIES' };
}

function loadedCategories(categories) {
    return { type: 'LOADED_CATEGORIES', categories };
}

function loadCategoriesError(error) {
    return { type: 'LOAD_CATEGORIES_ERROR', error };
}

export function loadCategories() {
    return dispatch => {
        dispatch(loadCategoriesAction());
        return fetch('/api/categories')
            .then(async res => dispatch(loadedCategories((await res.json()).categories
                .filter(c => c.parent_aliases.indexOf('restaurants') !== -1))))
            .catch(err => dispatch(loadCategoriesError(err)));
    };
}

const defaultNotice = Object.freeze({
    categories: [],
    error: undefined,
    loading: false
});

export function reducer(state = defaultNotice, action) {
    switch (action.type) {
        case 'LOAD_CATEGORIES':
            return { ...state, loading: true, error: undefined };
        case 'LOADED_CATEGORIES':
            return { ...state, categories: action.categories, loading: false };
        case 'LOAD_CATEGORIES_ERROR':
            return { ...state, error: action.error, loading: false };
    }
    return state;
}

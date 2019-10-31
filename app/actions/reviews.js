function loadReviewsAction(business) {
    return { type: 'LOAD_REVIEWS', business };
}

function loadedReviews(business, reviews) {
    return { type: 'LOADED_REVIEWS', business, reviews };
}

function loadReviewsError(business, error) {
    return { type: 'LOAD_REVIEWS_ERROR', business, error };
}

export function loadReviews(business) {
    return (dispatch, getState) => {
        const loading = getState().reviews.loading;
        if (loading.indexOf(business) !== -1
            || getState().reviews.reviews[business] !== undefined) {
            return;
        }
        dispatch(loadReviewsAction(business));
        return fetch(`/api/businesses/${business}/reviews`)
            .then(async res => dispatch(loadedReviews(business, (await res.json()).reviews)))
            .catch(err => dispatch(loadReviewsError(business, err)));
    };
}

const defaultNotice = Object.freeze({
    reviews: {},
    error: undefined,
    loading: []
});

export function reducer(state = defaultNotice, action) {
    switch (action.type) {
        case 'LOAD_REVIEWS':
            return { ...state, loading: [...state.loading, action.business], error: undefined };
        case 'LOADED_REVIEWS':
            return { ...state,
                reviews: { ...state.reviews, [action.business]: action.reviews },
                loading: state.loading.filter(b => b !== action.business)
            };
        case 'LOAD_REVIEWS_ERROR':
            return { ...state,
                error: action.error,
                loading: state.loading.filter(b => b !== action.business)
            };
    }
    return state;
}

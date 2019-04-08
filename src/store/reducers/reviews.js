import {fromJS} from 'immutable';
import {get} from 'lodash';
import signals from 'Store/signals';

const initialState = fromJS({loading: false, reviews: []});

export default function (state = initialState, action) {
    switch (action.type) {
        case signals.REVIEWS_LOADING:
            return state.merge({loading: true});
        case signals.REVIEWS_LOADED:
            return fromJS({
                loading: false,
                total: action.reviews.total,
                for: action.id || null,
                reviews: [...get(action.reviews, 'review', [])],
            });
        default:
            return state;
    }
}

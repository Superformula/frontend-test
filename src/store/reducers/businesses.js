import {fromJS} from 'immutable';
import {get} from 'lodash';
import signals from 'Store/signals';

const initialState = fromJS({loading: true, notFound: false, businesses: []});

export default function (state = initialState, action) {
    switch (action.type) {
        case signals.BUSINESSES_LOADING:
            return state.merge(fromJS({loading: true}));
        case signals.BUSINESSES_LOADED:
            return fromJS({
                loading: false,
                notFound: false,
                businesses: [...get(action, 'business', [])],
            });
        case signals.BUSINESS_NOT_FOUND:
            return state.merge(fromJS({
                loadingSingle: false,
                notFound: true,
            }));
        case signals.BUSINESS_LOADING:
            return state.merge(fromJS({loadingSingle: true, notFound: false}));
        case signals.BUSINESS_LOADED:
            return state.mergeDeep(fromJS({
                loadingSingle: false,
                notFound: false,
                businesses: [get(action, 'business', {})],
            }));
        default:
            return state;
    }
}

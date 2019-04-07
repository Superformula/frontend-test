import {fromJS} from 'immutable';
import {get} from 'lodash';
import signals from 'Store/signals';

const initialState = fromJS({loading: true, businesses: []});

export default function (state = initialState, action) {
    switch (action.type) {
        case signals.BUSINESSES_LOADING:
            return state.merge({loading: true});
        case signals.BUSINESSES_LOADED:
            return fromJS({
                loading: false,
                businesses: [...get(action, 'business', [])],
            });
        default:
            return state;
    }
}

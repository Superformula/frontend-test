import {fromJS} from 'immutable';
import signals from 'Store/signals';

const initialState = fromJS({});

export default function (state = initialState, action) {
    if (action.type === signals.UPDATE_FILTERS) {
        return state.merge(action.filters);
    }
    return state;
}

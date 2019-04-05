import {fromJS} from 'immutable';
import {get} from 'lodash';
import signals from 'Store/signals';

const initialState = fromJS([]);

export default function (state = initialState, action) {
    if (action.type === signals.BUSINESSES_LOADED) {
        return state.merge([...get(action, 'business', [])]);
    }
    return state;
}

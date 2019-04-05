import {fromJS} from 'immutable';
import signals from 'Store/signals';

const initialState = fromJS([]);

export default function (state = initialState, action) {
    const {type, ...data} = action;
    if (type === signals.PAGE_CHANGED) {
        return state.merge({...data});
    }
    return state;
}

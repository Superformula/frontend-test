import {fromJS} from 'immutable';
import signals from 'Store/signals';

const initialState = fromJS({});

export default function (state = initialState, action) {
    if (action.type === signals.STORE_LOCATION) {
        if (action.longitude || action.latitude) {
            return state.merge({
                latitude: action.latitude,
                longitude: action.longitude,
            });
        } else {
            return state.merge({
                location: action.position,
            });
        }
    }
    return state;
}

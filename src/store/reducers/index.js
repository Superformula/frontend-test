import { fromJS } from 'immutable';

import { RESTAURANTS_LOADING } from '../actions';

const initialState = fromJS({
    restaurantsLoading: true
});

function appReducer(state = initialState, action) {
    switch (action.type) {
        case RESTAURANTS_LOADING:
            return state.set('restaurantsLoading', true);
        default:
            return state;
    }
}

export default appReducer;

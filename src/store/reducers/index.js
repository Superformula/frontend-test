import {
	fromJS
} from 'immutable';

import {
	LOADING
} from '../actions';

const initialState = fromJS({
	loading: true
});

function appReducer(state = initialState, action) {
	switch (action.type) {
		case LOADING:
			return state.set('loading', true);
		default:
			return state
	}
}

export default appReducer;
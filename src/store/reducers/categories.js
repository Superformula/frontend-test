import {fromJS} from 'immutable';
import {get} from 'lodash';
import signals from 'Store/signals';

const initialState = fromJS({
    loading: true, categories: [
        {alias: 'american', title: 'American'},
        {alias: 'italian', title: 'Italian'},
        {alias: 'mexican', title: 'Mexican'},
        {alias: 'seafood', title: 'Seafood'},
        {alias: 'steakhouse', title: 'Steakhouse'},
        {alias: 'thai', title: 'Thai'},
    ],
});

export default function (state = initialState, action) {
    switch (action.type) {
        case signals.CATEGORIES_LOADING:
            return state.merge({loading: true});
        case signals.CATEGORIES_LOADED:
            return fromJS({
                loading: false,
                categories: [...get(action, 'categories', [])],
            });
        default:
            return state;
    }
}

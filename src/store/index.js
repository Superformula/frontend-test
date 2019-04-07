import {REDUX_KEYS} from 'Constants';
import * as Immutable from 'immutable';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import businesses from 'Store/reducers/businesses';
import categories from 'Store/reducers/categories';
import filters from 'Store/reducers/filters';
import location from 'Store/reducers/location';
import pagination from 'Store/reducers/pagination';

export function buildStore(reducer, middleware, initialState = {}) {
    const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            serialize: {
                immutable: Immutable,
            },
        })) || compose;
    const enhancers = composeEnhancers(
        applyMiddleware(...middleware),
    );
    return createStore(reducer, initialState, enhancers);
}


export default function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware();
    const store = buildStore(combineReducers({
            [REDUX_KEYS.BUSINESSES]: businesses,
            [REDUX_KEYS.LOCATION]: location,
            [REDUX_KEYS.PAGINATION]: pagination,
            [REDUX_KEYS.FILTERS]: filters,
            [REDUX_KEYS.CATEGORIES]: categories,
        }),
        [sagaMiddleware],
        initialState);

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    return store;
}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { reducer as businesses, loadBusinesses } from './app/actions/businesses';
import { reducer as categories, loadCategories } from './app/actions/categories';
import { MainComponent } from './app/components/MainComponent';

window.onload = () => {
    const store = createRootStore();

    ReactDOM.render(
        <Provider store={store}>
            <MainComponent />
        </Provider>,
        document.getElementById('appRoot'));
};

export function createRootStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const reducers = combineReducers({ businesses, categories });
    const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
    store.dispatch(loadBusinesses());
    store.dispatch(loadCategories());

    return store;
}

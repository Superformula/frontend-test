import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';
import { IS_PRODUCTION } from 'helpers/env';

let middleware;
const initialState = {};

if (IS_PRODUCTION) {
  middleware = applyMiddleware(thunk);
} else {
  middleware = applyMiddleware(thunk);
  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    middleware = compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__() //eslint-disable-line
    );
  }
}

const store = createStore(rootReducer, initialState, middleware);

export default store;

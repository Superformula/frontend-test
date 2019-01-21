import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const middlewares = [
  ReduxThunk,
];

// Add support for Redux Devtools
// https://github.com/zalmoxisus/redux-devtools-extension#installation
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export default () => createStore(reducers, composeEnhancers(
//   applyMiddleware(...middlewares),
// ));


export default (initialState) => {
  const store = createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(...middlewares),
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      /* eslint-disable global-require */
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

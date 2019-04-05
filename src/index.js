import App from 'Components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from 'Store';
import root from 'Store/sagas';

const rootElement = document.getElementById('root');
const store = configureStore();
store.runSaga(root);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement);

import Router from 'Components/Router';
import ScrollToTop from 'Components/ScrollToTop';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from 'Store';
import root from 'Store/sagas';

const rootElement = document.getElementById('root');
const store = configureStore();
store.runSaga(root);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <Router/>
            </ScrollToTop>
        </BrowserRouter>
    </Provider>,
    rootElement);

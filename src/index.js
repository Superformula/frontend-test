import Router from 'Components/routes/Router';
import ScrollToTop from 'Components/ScrollToTop';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from 'Store';
import rootSaga from 'Store/sagas';

const rootElement = document.getElementById('root');
const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <Router/>
            </ScrollToTop>
        </BrowserRouter>
    </Provider>,
    rootElement);

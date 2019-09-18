// Global application styles
import './scss/_base.scss';

// window.fetch polyfill TODO - put it in webpack?
import 'whatwg-fetch';

// React
import React from 'react';

import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './store';

import App from './components/App.jsx';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

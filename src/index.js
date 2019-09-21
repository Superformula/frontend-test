import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import './scss/_base.scss';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './store';
import App from './components/App.jsx';
import Detail from './components/RestaurantDetail.jsx';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route path="/detail/:id" component={Detail} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

import 'babel-polyfill';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from 'routes';
import store from 'store';
import ScrollToTop from 'components/ScrollToTop';

import 'assets/styles/App.scss';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  );
}

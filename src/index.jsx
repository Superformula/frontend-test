import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'assets/styles/App.scss';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) module.hot.accept();

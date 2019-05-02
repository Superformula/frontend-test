import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from './js/App.jsx';
import restaurantStore from './js/stores/RestaurantStore';

const wrapper = document.getElementById('app');
ReactDOM.render(<Provider store={ restaurantStore }><App /></Provider>, wrapper);

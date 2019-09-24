import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import 'scss/base.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import AllRestaurants from './components/AllRestaurants/AllRestaurants.jsx';
import Detail from './components/RestaurantDetail/RestaurantDetail.jsx';

render(
	<Provider store={store}>
		<BrowserRouter>
			<Route exact path="/" component={AllRestaurants} />
			<Route path="/detail/:id" component={Detail} />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

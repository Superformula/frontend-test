import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import 'scss/base.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import AllRestaurants from './components/AllRestaurants/AllRestaurants.jsx';
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail.jsx';

render(
	<ErrorBoundary>
		<Provider store={store}>
			<BrowserRouter>
				<Route exact path="/" component={AllRestaurants} />
				<Route path="/detail/:id" component={RestaurantDetail} />
			</BrowserRouter>
		</Provider>
	</ErrorBoundary>,
	document.getElementById('root')
);

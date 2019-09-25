/* global describe */
/* global it */
/* global afterEach */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../index';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import * as actionTypes from '../../constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
	afterEach(() => {
		fetchMock.restore();
	});
	it('creates FETCH_RESTAURANTS_SUCCESS and QUERY_OFFSET_CHANGED after fetching restaurants', () => {
		fetchMock.getOnce('/v3/businesses/search?location=Las%20Vegas&offset=0', {
			body: { businesses: [] },
			headers: { 'content-type': 'application/json' }
		});
		const expectedActions = [
			{ type: actionTypes.FETCH_RESTAURANTS_LOADING, value: true },
			{ type: actionTypes.FETCH_RESTAURANTS_SUCCESS, value: [] },
			{ type: actionTypes.QUERY_OFFSET_CHANGED, value: actions.OFFSET_INCREMENT }
		];
		const store = mockStore({ restaurants: [] });
		return store.dispatch(actions.getRestaurants()).then(() => {
			expect(store.getActions()).to.eql(expectedActions);
		});
	});

	it('creates FETCH_RESTAURANT_DETAILS_SUCCESS after fetching restaurant details', () => {
		fetchMock.getOnce('/v3/businesses/12345', {
			body: [],
			headers: { 'content-type': 'application/json' }
		});
		const expectedActions = [
			{ type: actionTypes.FETCH_RESTAURANT_DETAILS_LOADING, value: true },
			{ type: actionTypes.FETCH_RESTAURANT_DETAILS_SUCCESS, value: [] }
		];
		const store = mockStore({ restaurants: [] });
		return store.dispatch(actions.getRestaurantDetails('12345')).then(() => {
			expect(store.getActions()).to.eql(expectedActions);
		});
	});

	it('creates FETCH_REVIEWS_SUCCESS after fetching reviews', () => {
		fetchMock.getOnce('/v3/businesses/12345/reviews', {
			body: { reviews: [] },
			headers: { 'content-type': 'application/json' }
		});
		const expectedActions = [
			{ type: actionTypes.FETCH_REVIEWS_LOADING, value: true },
			{ type: actionTypes.FETCH_REVIEWS_SUCCESS, value: [] }
		];
		const store = mockStore({ restaurants: [] });
		return store.dispatch(actions.getReviews('12345')).then(() => {
			expect(store.getActions()).to.eql(expectedActions);
		});
	});
});

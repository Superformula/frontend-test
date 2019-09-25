/* eslint-disable no-undefined */
/* global describe */
/* global it */
import { expect } from 'chai';
import appReducer from '../index.js';

import * as actionTypes from '../../constants';

const initialState = {
	restaurantsLoading: true,
	restaurantDetailsLoading: true,
	reviewsLoading: true,
	categories: [],
	restaurants: [],
	restaurantDetails: {},
	reviews: [],
	openNow: true,
	queryOffset: 0,
	selectedPrice: 'all',
	selectedCategory: 'all',
	appError: false
};
describe('app reducer', () => {
	it('should return the initial state', () => {
		expect(appReducer(undefined, {})).to.eql(initialState);
	});
	const actionTests = [
		{
			action: { type: actionTypes.FETCH_RESTAURANTS_LOADING, value: true },
			expected: { restaurantsLoading: true }
		},
		{
			initialState: { restaurants: [] },
			action: { type: actionTypes.FETCH_RESTAURANTS_SUCCESS, value: [] },
			expected: { restaurantsLoading: false, restaurants: [] }
		},
		{ action: { type: actionTypes.FETCH_REVIEWS_LOADING, value: true }, expected: { reviewsLoading: true } },
		{
			action: { type: actionTypes.FETCH_REVIEWS_SUCCESS, value: [] },
			expected: {
				reviews: [],
				reviewsLoading: false
			}
		},
		{
			action: { type: actionTypes.FETCH_RESTAURANT_DETAILS_LOADING, value: true },
			expected: {
				restaurantDetailsLoading: true
			}
		},
		{
			action: { type: actionTypes.FETCH_RESTAURANT_DETAILS_SUCCESS, value: {} },
			expected: { restaurantDetailsLoading: false, restaurantDetails: {} }
		},
		{
			action: { type: actionTypes.OPEN_NOW_CHANGED, value: true },
			expected: { openNow: true }
		},
		{
			action: { type: actionTypes.SELECTED_PRICE_CHANGED, value: '$$' },
			expected: { selectedPrice: '$$' }
		},
		{
			action: { type: actionTypes.SELECTED_CATEGORY_CHANGED, value: 'Japanese' },
			expected: { selectedCategory: 'Japanese' }
		},
		{
			action: { type: actionTypes.QUERY_OFFSET_CHANGED, value: 40 },
			expected: { queryOffset: 40 }
		},
		{
			action: { type: actionTypes.CLEAR_FILTERS, value: null },
			expected: { categories: [], openNow: true, selectedCategory: 'all', selectedPrice: 'all' }
		},
		{
			action: { type: actionTypes.CLEAR_RESTAURANTS, value: null },
			expected: { restaurants: [], queryOffset: 0 }
		},
		{
			action: { type: actionTypes.FETCH_ERROR, value: null },
			expected: { appError: true }
		}
	];
	actionTests.forEach(test => {
		const initState = test.initialState || {};
		it(`should handle ${test.action.type}`, () => {
			expect(appReducer(initState, test.action)).to.eql(test.expected);
		});
	});
});

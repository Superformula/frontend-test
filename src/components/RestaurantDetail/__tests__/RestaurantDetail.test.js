/* eslint-disable camelcase */
/* global describe */
/* global it */
/* global jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RestaurantDetail } from '../RestaurantDetail';
import Review from '../../Review/Review';
import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
	const props = {
		restaurantDetails: {
			name: '',
			rating: 5,
			categories: [{ title: 'test title' }],
			price: '$$',
			hours: [{ is_open_now: true }],
			image_url: '',
			location: '',
			review_count: 555,
			coordinates: { latitude: 0, longitude: 0 }
		},
		reviews: [],
		onGetRestaurantDetails: jest.fn(),
		onGetReviews: jest.fn()
	};

	const wrapper = shallow(<RestaurantDetail {...props} />);

	return {
		props,
		wrapper
	};
}

describe('components', () => {
	describe('RestaurantDetail', () => {
		it('should render self and subcomponents', () => {
			const { wrapper } = setup();
			expect(wrapper.exists('Header')).to.equal(true);
			// WOULDDO - add more tests for what is rendered when different props are applied -
			// Reviews list, category, name, etc
		});
	});
});

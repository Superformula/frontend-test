/* global describe */
/* global it */
/* global jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AllRestaurants } from '../AllRestaurants';
import Filters from '../../Filters/Filters';
import RestaurantsList from '../../RestaurantsList/RestaurantsList';
import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
	const props = {
		onGetRestaurants: jest.fn(),
		onClearRestaurants: jest.fn()
	};

	const wrapper = shallow(<AllRestaurants {...props} />);

	return {
		props,
		wrapper
	};
}

describe('components', () => {
	describe('AllRestaurants', () => {
		it('should render self and subcomponents', () => {
			const { wrapper } = setup();
			expect(wrapper.exists('Header')).to.equal(true);
			expect(wrapper.contains(<Filters />)).to.equal(true);
			expect(wrapper.contains(<RestaurantsList />)).to.equal(true);
		});
	});
});

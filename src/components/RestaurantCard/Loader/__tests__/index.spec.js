import React from 'react';
import { shallow } from 'enzyme';
import { RestaurantCardLoader } from '../';

describe('RestaurantCardLoader', () => {
  it('should render without failing', () => {
    const wrapper = shallow(<RestaurantCardLoader />);
    expect(wrapper).toMatchSnapshot();
  });
});

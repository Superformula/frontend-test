import React from 'react';
import { shallow } from 'enzyme';
import { Restaurants } from '../';

describe('Restaurants', () => {
  it('should render without failing', () => {
    const wrapper = shallow(<Restaurants />);
    expect(wrapper).toMatchSnapshot();
  });
});

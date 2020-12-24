import React from 'react';
import { shallow } from 'enzyme';
import { Restaurants } from '../';

describe('Restaurants View', () => {
  it('should render without failing', () => {
    const wrapper = shallow(<Restaurants />);
    expect(wrapper).toMatchSnapshot();
  });
});

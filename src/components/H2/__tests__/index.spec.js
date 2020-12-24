import React from 'react';
import { mount } from 'enzyme';
import { H2 } from '../';

describe('H2', () => {
  it('should render without failing', () => {
    const wrapper = mount(<H2>All Restaurants</H2>);
    expect(wrapper).toMatchSnapshot();
  });
});

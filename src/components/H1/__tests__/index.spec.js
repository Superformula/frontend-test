import React from 'react';
import { mount } from 'enzyme';
import { H1 } from '../';

describe('H1', () => {
  it('should render without failing', () => {
    const wrapper = mount(<H1>Restaurants</H1>);
    expect(wrapper).toMatchSnapshot();
  });
});

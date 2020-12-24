import React from 'react';
import { shallow } from 'enzyme';
import { Routes } from '../';

describe('Routes', () => {
  it('should render routes without failing', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });
});

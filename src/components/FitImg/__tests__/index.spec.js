import React from 'react';
import { mount } from 'enzyme';
import { FitImg } from '../';

describe('FitImg', () => {
  it('should render without failing', () => {
    const wrapper = mount(<FitImg />);
    expect(wrapper).toMatchSnapshot();
  });
});

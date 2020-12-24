import React from 'react';
import { mount } from 'enzyme';
import { GenericLabel } from '../';

describe('GenericLabel', () => {
  it('should render without failing', () => {
    const wrapper = mount(<GenericLabel>Lorem ipsum</GenericLabel>);
    expect(wrapper).toMatchSnapshot();
  });
});

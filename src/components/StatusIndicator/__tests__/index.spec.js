import React from 'react';
import { mount } from 'enzyme';
import { StatusIndicator } from '../';

describe('StatusIndicator', () => {
  it('should render without failing', () => {
    const wrapper = mount(<StatusIndicator />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as open', () => {
    const wrapper = mount(<StatusIndicator isOpen />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { mount } from 'enzyme';
import { SpaceBetween } from '../';

describe('SpaceBetween', () => {
  it('should render without failing', () => {
    const wrapper = mount(<SpaceBetween />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with extra space', () => {
    const wrapper = mount(<SpaceBetween spaced />);
    expect(wrapper).toMatchSnapshot();
  });
});

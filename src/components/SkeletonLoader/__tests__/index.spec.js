import React from 'react';
import { mount } from 'enzyme';
import { SkeletonLoader } from '../';

describe('SkeletonLoader', () => {
  it('should render without failing', () => {
    const wrapper = mount(<SkeletonLoader />);
    expect(wrapper).toMatchSnapshot();
  });
});

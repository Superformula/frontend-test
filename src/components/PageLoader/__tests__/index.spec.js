import React from 'react';
import { mount } from 'enzyme';
import { PageLoader } from '../';

describe('PageLoader', () => {
  it('should render without failing', () => {
    const wrapper = mount(<PageLoader />);
    expect(wrapper).toMatchSnapshot();
  });
});

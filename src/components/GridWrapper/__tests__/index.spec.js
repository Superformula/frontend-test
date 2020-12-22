import React from 'react';
import { mount } from 'enzyme';
import { GridWrapper } from '../';

describe('GridWrapper', () => {
  it('should render without failing', () => {
    const wrapper = mount(<GridWrapper />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render flex grid wrapper', () => {
    const wrapper = mount(<GridWrapper flex />);
    expect(wrapper).toMatchSnapshot();
  });
});

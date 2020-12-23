import React from 'react';
import { mount } from 'enzyme';
import { Separator } from '../';

describe('Separator', () => {
  it('should render without failing', () => {
    const wrapper = mount(<Separator/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spaced separator', () => {
    const wrapper = mount(<Separator spaced/>);
    expect(wrapper).toMatchSnapshot();
  });
});

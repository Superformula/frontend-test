import React from 'react';
import { mount } from 'enzyme';
import { Paragraph } from '../';

describe('Paragraph', () => {
  it('should render without failing', () => {
    const wrapper = mount(<Paragraph>Lorem ipsum</Paragraph>);
    expect(wrapper).toMatchSnapshot();
  });
});

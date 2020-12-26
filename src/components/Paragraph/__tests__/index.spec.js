import React from 'react';
import { mount } from 'enzyme';
import { Paragraph } from '../';

describe('Paragraph', () => {
  it('should render without failing', () => {
    const wrapper = mount(<Paragraph>Lorem ipsum</Paragraph>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a bottom spaced paragraph', () => {
    const wrapper = mount(<Paragraph bottomSpaced>Lorem ipsum</Paragraph>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a paragraph with extra weight', () => {
    const wrapper = mount(<Paragraph extraWeight>Lorem ipsum</Paragraph>);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { mount } from 'enzyme';
import { RadioButton } from '../';

describe('RadioButton', () => {
  it('should render without failing', () => {
    const wrapper = mount(<RadioButton id="radio-1">Click me!</RadioButton>);
    expect(wrapper).toMatchSnapshot();
  });
});

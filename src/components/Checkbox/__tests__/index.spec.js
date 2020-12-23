import React from 'react';
import { mount } from 'enzyme';
import { Checkbox } from '../';

describe('Checkbox', () => {
  it('should render without failing', () => {
    const wrapper = mount(<Checkbox id='check-1'>Click me!</Checkbox>);
    expect(wrapper).toMatchSnapshot();
  });
});

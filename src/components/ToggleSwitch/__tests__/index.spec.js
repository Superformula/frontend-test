import React from 'react';
import { mount } from 'enzyme';
import { ToggleSwitch } from '../';

describe('ToggleSwitch', () => {
  it('should render without failing', () => {
    const wrapper = mount(<ToggleSwitch id='toggle-1'/>);
    expect(wrapper).toMatchSnapshot();
  });
});

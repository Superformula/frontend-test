import React from 'react';
import { mount, shallow } from 'enzyme';
import { RadioSelect } from '../';

describe('RadioSelect', () => {
  it('should render without failing', () => {
    const wrapper = mount(<RadioSelect />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render options when expanded', () => {
    const options = ['$', '$$'];
    const wrapper = shallow(<RadioSelect {...{ options }} />);
    const { onClick } = wrapper.find('Trigger').props();
    onClick();
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });
});

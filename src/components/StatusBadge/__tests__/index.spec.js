import React from 'react';
import { shallow, mount } from 'enzyme';
import { StatusBadge } from '../';

describe('StatusBadge', () => {
  it('should render without failing', () => {
    const wrapper = mount(<StatusBadge />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with the status of open', () => {
    const wrapper = shallow(<StatusBadge isOpen />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Rating } from '../';

describe('Rating', () => {
  it('should render without failing', () => {
    const wrapper = shallow(<Rating />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a custom number of stars', () => {
    const wrapper = shallow(<Rating max={2} rating={1} />);
    expect(wrapper).toMatchSnapshot();
  });
});

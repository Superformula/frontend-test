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

  it('should render a half stars', () => {
    const wrapper = shallow(<Rating max={2} rating={1.5} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a small rating', () => {
    const wrapper = shallow(<Rating $xs />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a large rating', () => {
    const wrapper = shallow(<Rating $lg />);
    expect(wrapper).toMatchSnapshot();
  });
});

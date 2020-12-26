import React from 'react';
import { shallow, mount } from 'enzyme';
import { Reviews } from '../';

describe('Reviews', () => {
  it('should render without failing', () => {
    const wrapper = mount(<Reviews />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with reviews', () => {
    const reviewCount = 10;
    const reviews = [
      {
        rating: 5,
        date: '01/01/2021',
        text: 'lorem ipsum',
        user: { name: 'tester', avatar: 'http://path.to/image.png' },
      },
    ];
    const wrapper = shallow(<Reviews {...{ reviewCount, reviews }} />);
    expect(wrapper).toMatchSnapshot();
  });
});

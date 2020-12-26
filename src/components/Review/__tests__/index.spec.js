import React from 'react';
import { shallow } from 'enzyme';
import { Review } from '../';

describe('Review', () => {
  it('should render without failing', () => {
    const wrapper = shallow(<Review />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a complete review', () => {
    const review = {
      rating: 5,
      date: '01/01/2021',
      text: 'lorem ipsum',
      user: { name: 'tester', avatar: 'http://path.to/image.png' },
    };
    const wrapper = shallow(<Review {...review} />);
    expect(wrapper).toMatchSnapshot();
  });
});

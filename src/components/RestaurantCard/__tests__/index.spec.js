import React from 'react';
import { shallow } from 'enzyme';
import { useIsMobileWidth } from 'hooks/useIsMobileWidth';
import { RestaurantCard } from '../';

jest.mock('hooks/useIsMobileWidth');

describe('RestaurantCard', () => {
  const baseProps = {
    id: 'abc123',
    picture: `https://picute.com/something.png`,
    name: 'Ut ipsum magna non laborum eiusmod',
    rating: 3,
    type: 'Thai',
    cost: '$$$$',
    isOpen: true,
  };

  it('should render without failing', () => {
    useIsMobileWidth.mockReturnValueOnce(false);
    const wrapper = shallow(<RestaurantCard {...baseProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with mobile components', () => {
    useIsMobileWidth.mockReturnValueOnce(true);
    const wrapper = shallow(<RestaurantCard {...baseProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { useRestaurantData } from 'hooks/useRestaurantData';
import { Restaurant } from '../';

jest.mock('hooks/useRestaurantData');
jest.mock('react-router-dom', () => ({ useParams: jest.fn() }));

describe('Restaurant View', () => {
  it('should render without failing', () => {
    useRestaurantData.mockReturnValueOnce({});
    const wrapper = shallow(<Restaurant />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with loading sections', () => {
    useRestaurantData.mockReturnValueOnce({ loading: true });
    const wrapper = shallow(<Restaurant />);
    expect(wrapper).toMatchSnapshot();
  });
});

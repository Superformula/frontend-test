import React from 'react';
import { shallow } from 'enzyme';
import { useRestaurantsData } from 'hooks/useRestaurantsData';
import { Restaurants } from '../';

jest.mock('hooks/useRestaurantsData');

describe('Restaurants View', () => {
  it('should render without failing', () => {
    useRestaurantsData.mockReturnValueOnce({});
    const wrapper = shallow(<Restaurants />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with loading cards', () => {
    useRestaurantsData.mockReturnValueOnce({ loading: true });
    const wrapper = shallow(<Restaurants />);
    expect(wrapper).toMatchSnapshot();
  });
});

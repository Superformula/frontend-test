import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { RestaurantsGrid } from './RestaurantsGrid';

const restaurants = [
  {
    id: '1',
    name: 'Very Long Name Restaurants',
    photo: 'https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg',
    photoAlt: 'burger with juice',
    rating: 4,
    price: '$$$',
    cuisineName: 'Thai',
    isOpen: true,
  },
  {
    id: '2',
    name: 'Restaurant 2',
    photo: 'https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg',
    photoAlt: 'burger with juice',
    rating: 2.5,
    price: '$',
    cuisineName: 'America',
    isOpen: false,
  },
];

describe('RestaurantsGrid component', () => {
  it('renders correctly with default props', () => {
    const { container, getByText } = render(<RestaurantsGrid restaurants={[]} />);

    expect(container.querySelector('.restaurants-grid')).toBeTruthy();
    expect(getByText('All Restaurants')).toBeTruthy();
  });

  it('renders proper amount of restaurants', () => {
    const { container, getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <RestaurantsGrid restaurants={restaurants} />
      </MemoryRouter>,
    );

    expect(container.querySelector('.restaurants-grid')).toBeTruthy();
    expect(getByText('All Restaurants')).toBeTruthy();

    expect(getByText('Very Long Name Restaurants')).toBeTruthy();
    expect(getByText('$$$')).toBeTruthy();
    expect(getByText('America')).toBeTruthy();

    expect(getByText('Restaurant 2')).toBeTruthy();
    expect(getByText('$')).toBeTruthy();
    expect(getByText('Thai')).toBeTruthy();

    expect(container.querySelectorAll('.restaurants-grid__card-wrapper').length).toBe(2);
  });
});

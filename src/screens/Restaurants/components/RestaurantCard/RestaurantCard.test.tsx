import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { RestaurantCard } from './RestaurantCard';

describe('RestaurantCard component', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <RestaurantCard
          id="1"
          name="Very Long Name Restaurants Number 1 In List"
          photo="https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg"
          photoAlt="burger with juice"
          rating={4}
          price=""
          cuisineName="Thai"
          isOpen
        />
      </MemoryRouter>,
    );

    expect(container.querySelector('.restaurant-card')).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { RestaurantCard } from './RestaurantCard';

describe('RestaurantCard component', () => {
  it('renders correctly with default props and photo alt provided', () => {
    const { container, getByText, getAllByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <RestaurantCard
          id="1"
          name="Very Long Name Restaurants Number 1 In List"
          photo="https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg"
          photoAlt="burger with juice"
          rating={4}
          price="$"
          cuisineName="Thai"
          isOpen
        />
      </MemoryRouter>,
    );

    expect(container.querySelector('.restaurant-card')).toBeTruthy();
    expect(getByText('Very Long Name Restaurants Number 1 In List')).toBeTruthy();
    expect((container.querySelector('.restaurant-card__image') as HTMLElement).getAttribute('src')).toBe(
      'https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg',
    );
    expect((container.querySelector('.restaurant-card__image') as HTMLElement).getAttribute('alt')).toBe(
      'burger with juice',
    );
    expect(getAllByTestId('star-full').length).toBe(4);
    expect(getByText('$')).toBeTruthy();
    expect(getByText('Thai')).toBeTruthy();
    expect((container.querySelector('a') as HTMLElement).getAttribute('href')).toBe('/restaurants/1');
    expect(container.querySelector('.restaurant-status__dot--red')).toBeFalsy();
  });

  it('renders correctly with default props and photo alt not provided', () => {
    const { container, getByText, getAllByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <RestaurantCard
          id="1"
          name="Very Long Name Restaurants Number 1 In List"
          photo="https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg"
          rating={4}
          price="$"
          cuisineName="Thai"
          isOpen
        />
      </MemoryRouter>,
    );

    expect(container.querySelector('.restaurant-card')).toBeTruthy();
    expect(getByText('Very Long Name Restaurants Number 1 In List')).toBeTruthy();
    expect((container.querySelector('.restaurant-card__image') as HTMLElement).getAttribute('src')).toBe(
      'https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg',
    );
    expect((container.querySelector('.restaurant-card__image') as HTMLElement).getAttribute('alt')).toBe(
      'restaurant dishes',
    );
    expect(getAllByTestId('star-full').length).toBe(4);
    expect(getByText('$')).toBeTruthy();
    expect(getByText('Thai')).toBeTruthy();
    expect((container.querySelector('a') as HTMLElement).getAttribute('href')).toBe('/restaurants/1');
    expect(container.querySelector('.restaurant-status__dot--red')).toBeFalsy();
  });
});

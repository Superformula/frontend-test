import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { Restaurants } from './Restaurants';

const restaurants = [
  {
    id: '1',
    name: 'Very Long Name Restaurants Number 1 In List',
    photo: 'https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg',
    photoAlt: 'burger with juice',
    rating: 4,
    price: '$$$',
    cuisineName: 'Thai',
    isOpen: true,
  },
  {
    id: '2',
    name: 'Very Long Name Restaurants Number 1 In List Very Long Name Restaurants Number 1 In List',
    photo: 'https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg',
    photoAlt: 'burger with juice',
    rating: 2.5,
    price: '$',
    cuisineName: 'Thai',
    isOpen: false,
  },
];

const initialFilters = {
  openNow: false,
  price: [],
  categories: [],
};

describe('Restaurants component', () => {
  it('renders loader if loading and no restaurants provided', () => {
    const { container } = render(
      <Restaurants isLoading restaurants={[]} isError={false} filters={initialFilters} onFiltersChange={() => {}} />,
    );

    expect(container.querySelector('.loader')).toBeTruthy();
    expect(container.querySelector('.restaurants-grid__card-wrapper')).toBeFalsy();
  });

  it('renders error message on error', () => {
    const { container } = render(
      <Restaurants
        isError
        isLoading={false}
        restaurants={restaurants}
        filters={initialFilters}
        onFiltersChange={() => {}}
      />,
    );

    expect(container.querySelector('.error-message')).toBeTruthy();
    expect(container.querySelector('.restaurants-grid__card-wrapper')).toBeFalsy();
  });

  it('renders restaurants grid if not loading and no error', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Restaurants
          isError={false}
          isLoading={false}
          restaurants={restaurants}
          filters={initialFilters}
          onFiltersChange={() => {}}
        />
      </MemoryRouter>,
    );

    expect(container.querySelector('.restaurants-grid__card-wrapper')).toBeTruthy();
    expect(container.querySelectorAll('.restaurant-card').length).toBe(2);
  });

  it('calls onFiltersChange on filter change', () => {
    const onChange = jest.fn();
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Restaurants
          isError={false}
          isLoading={false}
          restaurants={restaurants}
          filters={initialFilters}
          onFiltersChange={onChange}
        />
      </MemoryRouter>,
    );

    act(() => {
      fireEvent.click(container.querySelector('.checkbox-wrapper') as HTMLElement);
    });

    expect(container.querySelector('.restaurants-grid__card-wrapper')).toBeTruthy();
    expect(onChange).toBeCalledWith({ ...initialFilters, openNow: true });
  });
});

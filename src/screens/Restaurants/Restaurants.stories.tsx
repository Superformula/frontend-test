import React, { useState } from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import { Restaurants } from './Restaurants';
import { Filters } from './Restaurants.types';

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
  {
    id: '3',
    name: 'Restaurants 2',
    photo: 'https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg',
    photoAlt: 'burger with juice',
    rating: 2.5,
    price: '$',
    cuisineName: 'Thai',
    isOpen: false,
  },
  {
    id: '4',
    name: 'Very Long Name Restaurants Number 1 In List',
    photo: 'https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg',
    photoAlt: 'burger with juice',
    rating: 4,
    price: '$$$',
    cuisineName: 'Thai',
    isOpen: true,
  },
  {
    id: '5',
    name: 'Very Long Name Restaurants Number 1 In List Very Long Name Restaurants Number 1 In List',
    photo: 'https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg',
    photoAlt: 'burger with juice',
    rating: 2.5,
    price: '$',
    cuisineName: 'Thai',
    isOpen: false,
  },
  {
    id: '6',
    name: 'Restaurants 2',
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

storiesOf('Restaurants screen', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('Default', () => {
    const [filters, setFilters] = useState<Filters>(initialFilters);

    return (
      <Restaurants
        isLoading={false}
        isError={false}
        restaurants={restaurants}
        filters={filters}
        onFiltersChange={setFilters}
      />
    );
  })
  .add('With no restaurants information', () => {
    const [filters, setFilters] = useState<Filters>(initialFilters);

    return (
      <Restaurants isLoading={false} isError={false} restaurants={[]} filters={filters} onFiltersChange={setFilters} />
    );
  })
  .add('With loader', () => {
    const [filters, setFilters] = useState<Filters>(initialFilters);

    return <Restaurants isLoading isError={false} restaurants={[]} filters={filters} onFiltersChange={setFilters} />;
  });

import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

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

storiesOf('Restaurants screen', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('Default', () => <Restaurants isLoading={false} isError={false} restaurants={restaurants} />);

import React, { FC } from 'react';

import { Grid } from 'shared/components/Grid/Grid';
import { Header } from './components/Header/Header';
import { RestaurantsFiltersWrapper } from './components/RestaurantsFiltersWrapper/RestaurantsFiltersWrapper';
import { RestaurantsGrid } from './components/RestaurantsGrid/RestaurantsGrid';
import { Button } from 'shared/components/Button/Button';
import './Restaurants.scss';

const restaurants = [
  {
    name: 'Very Long Name Restaurants Number 1 In List',
    photo: 'https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg',
    photoAlt: 'burger with juice',
    rating: 4,
    price: '$$$',
    cuisineName: 'Thai',
    isOpen: true,
  },
  {
    name: 'Very Long Name Restaurants Number 1 In List Very Long Name Restaurants Number 1 In List',
    photo: 'https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg',
    photoAlt: 'burger with juice',
    rating: 2.5,
    price: '$',
    cuisineName: 'Thai',
    isOpen: false,
  },
  {
    name: 'Restaurants 2',
    photo: 'https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg',
    photoAlt: 'burger with juice',
    rating: 2.5,
    price: '$',
    cuisineName: 'Thai',
    isOpen: false,
  },
];

export const Restaurants: FC = () => {
  return (
    <Grid.Container>
      <Header
        title="Restaurants"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua."
      />
      <RestaurantsFiltersWrapper />
      <RestaurantsGrid restaurants={[...restaurants, ...restaurants, ...restaurants]} />
      <Grid.Row>
        <Button variant={Button.variant.WHITE} className="restaurants__load-more-button">
          Load more
        </Button>
      </Grid.Row>
    </Grid.Container>
  );
};

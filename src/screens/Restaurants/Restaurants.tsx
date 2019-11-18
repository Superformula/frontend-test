import React, { FC } from 'react';

import { Grid } from 'shared/components/Grid/Grid';
import { Header } from './components/Header/Header';
import { RestaurantsFiltersWrapper } from './components/RestaurantsFiltersWrapper/RestaurantsFiltersWrapper';
import { Button } from 'shared/components/Button/Button';
import { RestaurantsGrid } from './components/RestaurantsGrid/RestaurantsGrid';
import { RestaurantsProps } from './Restaurants.types';
import { Loader } from 'shared/components/Loader/Loader';
import './Restaurants.scss';

export const Restaurants: FC<RestaurantsProps> = ({ isLoading, isError, restaurants, filters, onFiltersChange }) => {
  if (isError) return <p>Error</p>;

  return (
    <Grid.Container>
      <Header
        title="Restaurants"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua."
      />
      <RestaurantsFiltersWrapper filters={filters} onChange={onFiltersChange} />
      {isLoading && !restaurants.length ? (
        <Loader />
      ) : (
        <>
          <RestaurantsGrid restaurants={restaurants} />
          {restaurants.length > 0 && (
            <Grid.Row>
              <Button variant={Button.variant.WHITE} className="restaurants__load-more-button">
                Load more
              </Button>
            </Grid.Row>
          )}
        </>
      )}
    </Grid.Container>
  );
};

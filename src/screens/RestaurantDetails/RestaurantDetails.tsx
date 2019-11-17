import React, { FC } from 'react';

import { Grid } from 'shared/components/Grid/Grid';
import { Header } from './components/Header/Header';
import { MapGalleryWrapper } from './components/MapGalleryWrapper/MapGalleryWrapper';
import { ReviewsList } from './components/ReviewsList/ReviewsList';
import { RestaurantDetailsProps } from './RestaurantDetails.types';
import { Loader } from 'shared/components/Loader/Loader';

export const RestaurantDetails: FC<RestaurantDetailsProps> = ({ isLoading, isError, restaurantDetails }) => {
  if (isLoading) {
    return <Loader isFullscreen />;
  }

  if (isError || !restaurantDetails) {
    return <p>Error!</p>;
  }

  return (
    <Grid.Container>
      <Header
        title={restaurantDetails.name}
        rating={restaurantDetails.rating}
        cuisineName={restaurantDetails.cuisineName}
        priceRange={restaurantDetails.priceRange}
        isOpen={restaurantDetails.isOpen}
      />
      <MapGalleryWrapper images={restaurantDetails.images} />
      <ReviewsList reviewsCount={restaurantDetails.reviewsCount} reviews={restaurantDetails.reviews} />
    </Grid.Container>
  );
};

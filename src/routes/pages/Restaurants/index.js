import React from 'react';
import { DICTIONARY } from 'consts/dictionary';
import { H1 } from 'components/H1';
import { H2 } from 'components/H2';
import { Paragraph } from 'components/Paragraph';
import { GridWrapper } from 'components/GridWrapper';
import { Separator } from 'components/Separator';
import { RestaurantCard } from 'components/RestaurantCard';
import { RestaurantCardLoader } from 'components/RestaurantCard/Loader';
import { Restaurants as RestaurantsWrapper } from 'components/Restaurants';
import { LoadMore } from 'components/LoadMore';
import { useRestaurantsData } from 'hooks/useRestaurantsData';

export const Restaurants = () => {
  const { restaurants, loading, onLoadMore } = useRestaurantsData();

  return (
    <>
      <GridWrapper>
        <H1>{DICTIONARY.RESTAURANTS}</H1>
        <Paragraph>{DICTIONARY.MAIN_PAGE_DESCRIPTION}</Paragraph>
      </GridWrapper>
      <Separator spaced />
      <GridWrapper>Filters placeholder</GridWrapper>
      <Separator spaced />
      <GridWrapper>
        <H2>{DICTIONARY.ALL_RESTAURANTS}</H2>
        <RestaurantsWrapper>
          {restaurants?.map(restaurant => (
            <RestaurantCard {...{ key: restaurant.id, ...restaurant }} />
          ))}
          {loading && (
            <>
              <RestaurantCardLoader />
              <RestaurantCardLoader />
              <RestaurantCardLoader />
              <RestaurantCardLoader />
            </>
          )}
        </RestaurantsWrapper>
        {!loading && <LoadMore onClick={onLoadMore} />}
      </GridWrapper>
    </>
  );
};

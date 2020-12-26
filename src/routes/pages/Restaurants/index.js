import React from 'react';
import { DICTIONARY } from 'consts/dictionary';
import { H1 } from 'components/H1';
import { H2 } from 'components/H2';
import { Paragraph } from 'components/Paragraph';
import { GridWrapper } from 'components/GridWrapper';
import { RestaurantCard } from 'components/RestaurantCard';
import { RestaurantCardLoader } from 'components/RestaurantCard/Loader';
import { Restaurants as RestaurantsWrapper } from 'components/Restaurants';
import { LoadMore } from 'components/LoadMore';
import { FiltersBar } from 'components/FiltersBar';
import { useRestaurantsData } from 'hooks/useRestaurantsData';
import { useFilteredData } from 'hooks/useFilteredData';

export const Restaurants = () => {
  const { restaurants, loading, onLoadMore } = useRestaurantsData();
  const filteredRestaurants = useFilteredData(restaurants);

  return (
    <>
      <GridWrapper>
        <H1>{DICTIONARY.RESTAURANTS}</H1>
        <Paragraph bottomSpaced>{DICTIONARY.MAIN_PAGE_DESCRIPTION}</Paragraph>
      </GridWrapper>
      <div>
        <FiltersBar />
        <GridWrapper>
          <H2>{DICTIONARY.ALL_RESTAURANTS}</H2>
          {(loading || !!filteredRestaurants?.length) && (
            <RestaurantsWrapper>
              {filteredRestaurants?.map(restaurant => (
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
          )}
          {!loading && !!filteredRestaurants?.length && (
            <LoadMore onClick={onLoadMore} />
          )}
          {!loading && !filteredRestaurants?.length && (
            <Paragraph bottomSpaced>{DICTIONARY.NO_RESULTS}</Paragraph>
          )}
        </GridWrapper>
      </div>
    </>
  );
};

export default Restaurants;

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

export const Restaurants = () => (
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
        <RestaurantCardLoader />
        <RestaurantCardLoader />
        <RestaurantCardLoader />
        <RestaurantCardLoader />
        <RestaurantCard />
        <RestaurantCard name="Taste of Italy" />
        <RestaurantCard isOpen />
        <RestaurantCard />
        <RestaurantCard isOpen />
        <RestaurantCard />
      </RestaurantsWrapper>
      <LoadMore />
    </GridWrapper>
  </>
);

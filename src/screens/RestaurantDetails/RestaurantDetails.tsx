import React, { FC } from 'react';

import { Grid } from 'shared/components/Grid/Grid';
import { Header } from './components/Header/Header';
import { MapGalleryWrapper } from './components/MapGalleryWrapper/MapGalleryWrapper';
import { ReviewsList } from './components/ReviewsList/ReviewsList';

const reviewDetails = {
  reviewerAvatar: 'https://via.placeholder.com/64',
  reviewerName: 'Brian B.',
  dateCreated: '10/9/2018',
  rating: 4,
  comment: `Don't be fooled by the French name, this place oozes with Californian flair. Their space is phenomenal: bright,
warm colors yet clean and inviting. I've been twice for brunch and both times have been incredible! On our next
trip to LA, I should really check out dinner since they seem to do more classic French preparations at that time.

For brunch, drool over the cast-iron pots of shakshouka, perfectly jiggly eggs over kimchi fried rice, marvel at
their artful breakfast toasts and do good by ordering a fresh squeezed green juice. You'll need it to feel less
guilty when you devour their sweet sticky bun or their creamy delicious Hazelnut puffs. OMG. I'm still dreaming
about those cream puffs right now ...

Calories be damned.`,
};

export const RestaurantDetails: FC = () => (
  <Grid.Container>
    <Header title="Restaurant 3" rating={3.5} cuisineName="Japanese" priceRange="$$$" isOpen />
    <MapGalleryWrapper
      images={['https://via.placeholder.com/230', 'https://via.placeholder.com/230', 'https://via.placeholder.com/230']}
    />
    <ReviewsList reviews={[reviewDetails, reviewDetails, reviewDetails, reviewDetails]} />
  </Grid.Container>
);

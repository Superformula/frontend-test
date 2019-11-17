import React, { FC, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router';

import { RestaurantDetails } from './RestaurantDetails';
import { GET_RESTAURANT_INFO } from 'api/queries/restaurantsQueries';
import { RestaurantDetailsResponse } from 'api/queries/restaurantsQueries.types';
import { RestaurantDetailedInfo } from 'types/restaurants';

/* eslint-disable @typescript-eslint/camelcase */
const parseResponse = ({
  business: { name, rating, price, categories, is_closed, review_count, photos, reviews },
}: RestaurantDetailsResponse): RestaurantDetailedInfo => ({
  name,
  rating,
  cuisineName: categories[0].title,
  priceRange: price,
  isOpen: !!is_closed,
  images: photos,
  reviewsCount: review_count,
  reviews: reviews.map(({ rating: reviewRating, text, time_created, user }) => ({
    rating: reviewRating,
    dateCreated: time_created,
    comment: text,
    user: {
      name: user.name,
      imageUrl: user.image_url,
    },
  })),
});
/* eslint-enable @typescript-eslint/camelcase */

export const RestaurantDetailsContainer: FC = () => {
  const [restaurantDetails, setRestaurantDetails] = useState<RestaurantDetailedInfo | null>(null);
  const { restaurantId } = useParams();
  const { loading, error } = useQuery(GET_RESTAURANT_INFO, {
    variables: { id: restaurantId },
    onCompleted: (res: RestaurantDetailsResponse) => setRestaurantDetails(parseResponse(res)),
  });

  return <RestaurantDetails isLoading={loading} isError={!!error} restaurantDetails={restaurantDetails} />;
};

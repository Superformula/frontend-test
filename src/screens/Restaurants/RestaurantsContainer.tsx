import React, { FC, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Restaurants } from './Restaurants';
import { SEARCH_RESTAURANTS } from 'api/queries/restaurantsQueries';
import { SearchRestaurantsResponse } from 'api/queries/restaurantsQueries.types';
import { RestaurantInfo } from 'types/restaurants';

/* eslint-disable @typescript-eslint/camelcase */
const parseResponse = (response: SearchRestaurantsResponse): RestaurantInfo[] =>
  response.search.business.map(({ id, name, price, rating, is_closed, photos, categories }) => ({
    id,
    name,
    photo: photos[0],
    rating,
    price,
    cuisineName: categories[0].title,
    isOpen: !is_closed,
  }));
/* eslint-enable @typescript-eslint/camelcase */

export const RestaurantsContainer: FC = () => {
  const [restaurants, setRestaurants] = useState<RestaurantInfo[]>([]);
  const { loading, error } = useQuery(SEARCH_RESTAURANTS, {
    variables: { price: '', categories: '', openNow: true },
    onCompleted: (res: SearchRestaurantsResponse) => setRestaurants(parseResponse(res)),
  });

  return <Restaurants isLoading={loading} isError={!!error} restaurants={restaurants} />;
};

import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { restaurantQuery } from '../graphql/queries/restaurant';

// Mock
import data from '../graphql/mocks/restaurant.json';

export const useRestaurantData = id => {
  // const { data, loading } = useQuery(restaurantQuery, { variables: { id } });
  const restaurant = useMemo(() => reshapeData(data?.business), [
    data?.business,
  ]);
  console.log({ restaurant });
  return { restaurant, loading: false };
};

const reshapeData = ({
  categories,
  is_closed,
  location,
  name,
  photos,
  price,
  rating,
  review_count,
  reviews,
}) => ({
  address: location?.formatted_address,
  isOpen: !is_closed,
  name,
  photos,
  price,
  rating,
  reviewCount: review_count,
  type: categories?.[0]?.title,
  reviews: reviews.map(buildReviews),
});

const buildReviews = ({ rating, time_created, text, user }) => ({
  rating,
  date: new Date(time_created).toLocaleDateString(),
  text,
  user: { name: user.name, avatar: user.image_url },
});

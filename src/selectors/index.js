// restaurants

export const allRestaurants = ({ restaurant }) => restaurant.get('restaurants');
export const allRestaurantReviews = ({ restaurant }) => restaurant.get('reviews');
export const getRestaurantData = ({ restaurant }) => {
  // destructure props here for use in container
  const {
    id,
    is_closed,
    price,
    rating,
    image_url,
    name,
    categories,
    location,
    photos,
    review_count,
  } = restaurant.get('restaurant');

  return {
    id,
    is_closed,
    price,
    rating,
    image_url,
    name,
    categories,
    location,
    photos,
    review_count,
  };
};

export const isFetchingRestaurant = ({ restaurant }) => restaurant.get('isFetching');
export const isFetchingRestaurants = ({ restaurant }) => restaurant.get('isFetching');
export const getFilters = ({ restaurant }) => restaurant.get('filters');

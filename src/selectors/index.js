// restaurants

export const allRestaurants = ({ restaurant }) => restaurant.restaurants;
export const allRestaurantReviews = ({ restaurant }) => restaurant.reviews;
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
  } = restaurant.restaurant;

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

export const isFetchingRestaurant = ({ restaurant }) => restaurant.isFetching;
export const isFetchingRestaurants = ({ restaurant }) => restaurant.isFetching;
export const getFilters = ({ restaurant }) => restaurant.filters;

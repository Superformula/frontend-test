import { RestaurantDetailedInfo } from 'types/restaurants';

export type RestaurantDetailsProps = {
  isLoading: boolean;
  isError: boolean;
  restaurantDetails: RestaurantDetailedInfo | null;
};

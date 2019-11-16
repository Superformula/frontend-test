import { RestaurantInfo } from 'types/restaurants';

export type RestaurantsProps = {
  isLoading: boolean;
  isError: boolean;
  restaurants: RestaurantInfo[];
};

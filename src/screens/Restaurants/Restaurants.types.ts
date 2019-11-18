import { RestaurantInfo } from 'types/restaurants';

export type Filters = {
  openNow: boolean;
  price: string[];
  categories: string[];
};

export type RestaurantsProps = {
  isLoading: boolean;
  isError: boolean;
  filters: Filters;
  onFiltersChange(values: Filters): void;
  restaurants: RestaurantInfo[];
};

import { Filters } from 'screens/Restaurants/Restaurants.types';

export type RestaurantsFiltersWrapperProps = {
  filters: Filters;
  onChange(filters: Filters): void;
};

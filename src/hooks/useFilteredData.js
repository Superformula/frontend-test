import { useContext } from 'react';
import { applyMultipleFilters } from 'utils/array';
import { StoreContext } from '../store';

export const useFilteredData = restaurants => {
  const [state] = useContext(StoreContext) || [];
  const { filters = {} } = state || {};
  return applyMultipleFilters(restaurants, filters);
};

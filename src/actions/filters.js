import { filtersPath } from '../paths';

export const clearFilters = () => ({ setState }) => setState(filtersPath, {});
export const setFilter = (filter, value) => ({ setState }) =>
  setState([...filtersPath, filter], value);

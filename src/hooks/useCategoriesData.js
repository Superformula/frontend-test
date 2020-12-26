import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { categoriesQuery } from '../graphql/queries/categories';

export const useCategoriesData = () => {
  const { data } = useQuery(categoriesQuery);
  const { category = [] } = data?.categories || {};
  const restaurantCategories = category.filter(keepOnlyRestaurants);
  const categories = useMemo(() => reshapeData(restaurantCategories), [
    data?.categories?.category,
  ]);
  return categories;
};

const keepOnlyRestaurants = ({ parent_categories }) =>
  parent_categories?.some(({ alias }) => alias === 'restaurants');

const reshapeData = categories =>
  categories?.map(({ alias, title }) => ({ label: title, value: alias }));

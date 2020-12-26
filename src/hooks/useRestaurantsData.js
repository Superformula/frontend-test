import { useMemo, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { restaurantsQuery } from '../graphql/queries/restaurants';
import { StoreContext } from '../store';

// Mock
import data from '../graphql/mocks/restaurants.json';
const fetchMore = () => console.log('FETCHING MORE...');
const loading = true;

export const useRestaurantsData = () => {
  const [state = {}] = useContext(StoreContext) || [];
  const { filters = {} } = state;
  // const { loading, data, fetchMore } = useQuery(restaurantsQuery, {
  //   notifyOnNetworkStatusChange: true,
  //   variables: { categories: filters.category },
  // });

  const { business = [] } = data?.search || {};
  const offset = business.length;
  const onLoadMore = loadMore(fetchMore, offset, filters);
  const restaurants = useMemo(() => reshapeData(business), [
    data?.search?.business,
  ]);

  return { restaurants, loading, onLoadMore };
};

const loadMore = (fetchMore, offset, filters = {}) => () => {
  const variables = { offset, ...reshapeFilters(filters) };
  const updateQuery = (prevResult, { fetchMoreResult }) => {
    const newRestaurants = fetchMoreResult?.search?.business;
    if (!newRestaurants.length) return prevResult;

    return {
      search: {
        ...prevResult.search,
        business: [...prevResult.search.business, ...newRestaurants],
      },
    };
  };

  fetchMore({ variables, updateQuery });
};

const reshapeFilters = ({ isOpen, category, price }) => ({
  price: price?.length,
  open_now: isOpen,
  categories: category,
});

const reshapeData = restaurants =>
  restaurants?.map(
    ({ id, photos, name, rating, categories, price, is_closed }) => ({
      id,
      name,
      rating,
      price,
      picture: photos?.[0],
      type: categories?.[0]?.title,
      category: categories?.[0]?.alias,
      isOpen: !is_closed,
    })
  );

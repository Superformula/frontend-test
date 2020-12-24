import { useQuery } from '@apollo/client';
import { restaurantsQuery } from '../graphql/queries/restaurants';

// Mock
import data from '../graphql/mocks/restaurants.json';
const fetchMore = () => console.log('FETCHING MORE...');
const loading = true;

export const useRestaurantsData = () => {
  // const { loading, data, fetchMore } = useQuery(restaurantsQuery, {
  //   notifyOnNetworkStatusChange: true,
  // });
  const { business = [] } = data?.search || {};
  const offset = business.length;
  const onLoadMore = loadMore(fetchMore, offset);
  const restaurants = reshapeData(business);
  return { restaurants, loading, onLoadMore };
};

const loadMore = (fetchMore, offset) => () => {
  const variables = { offset };
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

const reshapeData = restaurants =>
  restaurants?.map(
    ({ id, photos, name, rating, categories, price, is_closed }) => ({
      id,
      name,
      rating,
      price,
      picture: photos?.[0],
      type: categories?.[0]?.title,
      isOpen: !is_closed,
    })
  );

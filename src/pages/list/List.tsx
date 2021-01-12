import { NetworkStatus } from '@apollo/client';
import LoadingIndicator from 'design-system/LoadingIndicator';
import * as React from 'react';
import styled from 'styled-components';

import Filters from './Filters';
import Header from './Header';
import Results from './Results';
import restaurantCategories from './restaurantCategories.json';
import { FilterValue } from './types';
import useListPageData from './useListPageData';

const PRICES = [
  { label: 'All', value: '1, 2, 3, 4' },
  { label: '$', value: '1' },
  { label: '$$', value: '2' },
  { label: '$$$', value: '3' },
  { label: '$$$$', value: '4' },
];

const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

function List() {
  const [filters, setFilters] = React.useState<FilterValue>({
    openNow: false,
    price: PRICES[0].value,
    category: '',
  });

  const { data, loading, fetchMore, networkStatus } = useListPageData(filters);

  if (loading && networkStatus !== NetworkStatus.fetchMore) {
    return (
      <Main>
        <Header />
        <Container>
          <LoadingIndicator />
        </Container>
      </Main>
    );
  }

  const restaurantType = restaurantCategories.find(
    ({ value }) => value === filters.category
  ).label;

  return (
    <Main>
      <Header />
      <Filters
        filters={filters}
        prices={PRICES}
        categories={restaurantCategories}
        onChange={setFilters}
      />
      <Results
        restaurantType={restaurantType}
        restaurantsCount={data.restaurants.total}
        restaurants={data.restaurants.business}
        onLoadMore={() =>
          fetchMore({
            variables: {
              offset: data.restaurants.business.length,
            },
          })
        }
        isLoadingMore={networkStatus === NetworkStatus.fetchMore}
      />
    </Main>
  );
}

export default List;

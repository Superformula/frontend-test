import LoadingIndicator from 'design-system/LoadingIndicator';
import * as React from 'react';
import styled from 'styled-components';

import Filters from './Filters';
import Header from './Header';
import Results from './Results';
import { Category, FilterValue } from './types';
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

function getRestaurantCategories(
  categories: Array<Category>
): Array<{ label: string; value: string }> {
  const restaurantCategories = categories
    .filter(({ parent_categories }) =>
      parent_categories.some(({ alias }) => alias === 'restaurants')
    )
    .map(({ title, alias }) => ({
      label: title,
      value: alias,
    }));

  restaurantCategories.unshift({
    label: 'All',
    value: '',
  });

  return restaurantCategories;
}

function List() {
  const [filters, setFilters] = React.useState<FilterValue>({
    openNow: false,
    price: PRICES[0].value,
    category: '',
  });

  const { data, loading } = useListPageData(filters);

  if (loading) {
    return (
      <Main>
        <Header />
        <Container>
          <LoadingIndicator />
        </Container>
      </Main>
    );
  }

  const restaurantCategories = getRestaurantCategories(
    data.categories.category
  );

  return (
    <Main>
      <Header />
      <Filters
        filters={filters}
        prices={PRICES}
        categories={restaurantCategories}
        onChange={setFilters}
      />
      <Results />
    </Main>
  );
}

export default List;

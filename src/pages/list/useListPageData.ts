import { useQuery, gql } from '@apollo/client';

import { Category, FilterValue } from './types';

const QUERY = gql`
  query GetListPageData($openNow: Boolean, $price: String, $category: String) {
    restaurants: search(
      # Las Vegas coordinates
      latitude: 36.1699
      longitude: -115.1398
      open_now: $openNow
      price: $price
      categories: $category
    ) {
      total
      business {
        name
        rating
        categories {
          alias
          title
        }
        price
        is_closed
      }
    }

    categories(country: "US") {
      category {
        title
        alias
        parent_categories {
          title
          alias
        }
      }
    }
  }
`;

interface QueryResponse {
  categories: {
    category: Array<Category>;
  };
}

function useListPageData(filters: FilterValue) {
  return useQuery<QueryResponse, FilterValue>(QUERY, {
    variables: filters,
  });
}

export default useListPageData;

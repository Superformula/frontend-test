import { gql } from '@apollo/client';

export const categoriesQuery = gql`
  query Categories {
    categories(country: "US") {
      category {
        alias
        title
        parent_categories {
          alias
          title
        }
      }
    }
  }
`;

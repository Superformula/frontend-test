// Imports
// -------

// Libraries
import { gql } from "@apollo/client";

// Internal
// --------

const query = gql`
  query GetCategories {
    categories(country: "US") {
      category {
        alias
        title
        parent_categories {
          alias
        }
      }
    }
  }
`;

// Exports
// -------

export default query;

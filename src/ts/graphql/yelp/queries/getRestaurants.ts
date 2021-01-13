// Imports
// -------

// Libraries
import { gql } from "@apollo/client";

// Internal
// --------

const query = gql`
  query GetRestaurants(
    $limit: Int = 12
    $offset: Int = 0
    $open_now: Boolean
    $price: String
    $categories: String
  ) {
    search(
      location: "Las Vegas"
      offset: $offset
      limit: $limit
      open_now: $open_now
      price: $price
      categories: $categories
    ) {
      total
      business {
        id
        name
        rating
        photos
        price
        is_closed
        categories {
          alias
          title
        }
      }
    }
  }
`;

// Exports
// -------

export default query;

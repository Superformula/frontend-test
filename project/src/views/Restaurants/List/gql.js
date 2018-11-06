import gql from "graphql-tag";

export const LIST_RESTAURANTS = gql`
  query ListRestaurants(
    $location: String!
    $limit: Int!
    $offset: Int!
    $open_now: Boolean
    $price: String
    $category: String
  ) {
    search(
      location: $location
      limit: $limit
      offset: $offset
      open_now: $open_now
      price: $price
      categories: $category
    ) {
      total
      business {
        alias
        photos
        name
        rating
        categories {
          title
        }
        price
        is_closed
      }
    }
  }
`;

import { gql } from "@apollo/client";
export {
  useSearchRestaurantsQuery,
  useGetRestaurantQuery,
} from "../../generated/graphql";

/**
 * https://www.yelp.com/developers/graphiql?query=query%20%7B%0A%09search(location%3A%20%22Las%20Vegas%22%2C%20categories%3A%20%22restaurant%22)%20%7B%0A%20%20%20%20business%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D
 *
 */
export const SEARCH_RESTAURANTS = gql`
  query SearchRestaurants(
    $location: String!
    $openNow: Boolean
    $categories: String
    $price: String
    $limit: Int
    $offset: Int
  ) {
    search(
      location: $location
      limit: $limit
      offset: $offset
      categories: $categories
      open_now: $openNow
      price: $price
    ) {
      business {
        ...SearchRestaurantFragment
      }
    }
  }
`;

export const SEARCH_RESTAURANTS_FRAGMET = gql`
  fragment SearchRestaurantFragment on Business {
    id
    name
    is_closed
    rating
    price
    photos
    categories {
      alias
      title
    }
  }
`;

export const GET_RESTAURANT = gql`
  query GetRestaurant($id: String) {
    business(id: $id) {
      ...RestaurantFragment
    }
  }
`;

export const RESTAURANT_FRAGMENT = gql`
  fragment RestaurantFragment on Business {
    name
    is_closed
    rating
    price
    photos
    review_count
    hours {
      is_open_now
    }
    categories {
      alias
      title
    }
    coordinates {
      latitude
      longitude
    }
    location {
      formatted_address
    }
    reviews {
      ...ReviewFragment
    }
  }
`;

export const REVIEW_FRAGMENT = gql`
  fragment ReviewFragment on Review {
    rating
    text
    time_created
    user {
      image_url
      name
    }
  }
`;

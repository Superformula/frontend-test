import { gql } from 'apollo-boost';

export const SEARCH_RESTAURANTS = gql`
  query Search($price: String, $categories: String, $openNow: Boolean) {
    search(location: "las vegas", limit: 30, price: $price, categories: $categories, open_now: $openNow) {
      business {
        id
        name
        price
        rating
        is_closed
        photos
        categories {
          title
        }
      }
    }
  }
`;

export const GET_RESTAURANT_INFO = gql`
  query GetRestaurantInfo($id: String) {
    business(id: $id) {
      name
      rating
      price
      photos
      categories {
        title
      }
      is_closed
      review_count
      reviews {
        rating
        text
        time_created
        user {
          name
          image_url
        }
      }
    }
  }
`;

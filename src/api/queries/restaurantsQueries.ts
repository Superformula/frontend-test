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

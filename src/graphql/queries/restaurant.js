import { gql } from '@apollo/client';

export const restaurantQuery = gql`
  query GetRestaurantDetails($id: String, $offset: Int = 0, $limit: Int = 6) {
    business(id: $id) {
      name
      rating
      categories {
        title
      }
      price
      is_closed
      photos
      location {
        formatted_address
      }
      review_count
      reviews(offset: $offset, limit: $limit) {
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

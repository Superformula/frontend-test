import gql from "graphql-tag";

export const RESTAURANT_DETAILS = gql`
  query RestaurantDetails($alias: String!) {
    business(id: $alias) {
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
      coordinates {
        latitude
        longitude
      }
      review_count
      reviews(limit: 3) {
        user {
          name
          image_url
        }
        rating
        text
        time_created
      }
    }
  }
`;
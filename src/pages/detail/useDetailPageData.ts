import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { RestaurantDetail } from './types';

const QUERY = gql`
  query GetDetailPageData($id: String) {
    business(id: $id) {
      id
      rating
      categories {
        alias
        title
      }
      price
      isClosed: is_closed
      location {
        formattedAddress: formatted_address
      }
      coordinates {
        latitude
        longitude
      }
      photos
      reviewCount: review_count
      reviews {
        id
        rating
        user {
          id
          imageUrl: image_url
          name
        }
        text
        timeCreated: time_created
      }
    }
  }
`;

function useDetailPageData() {
  const { id } = useParams<{ id: string }>();

  return useQuery<RestaurantDetail, { id: string }>(QUERY, {
    variables: { id },
    skip: !id,
  });
}

export default useDetailPageData;

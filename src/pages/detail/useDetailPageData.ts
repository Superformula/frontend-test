import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { RestaurantDetail } from './types';

const QUERY = gql`
  query GetDetailPageData($id: String, $offset: Int, $limit: Int) {
    business(id: $id) {
      id
      name
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
      reviews(offset: $offset, limit: $limit) {
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

interface QueryResponse {
  business: RestaurantDetail;
}

interface QueryParameters {
  id: string;
  offset: number;
  limit: number;
}

function useDetailPageData() {
  const { id } = useParams<{ id: string }>();

  return useQuery<QueryResponse, QueryParameters>(QUERY, {
    variables: { id, offset: 0, limit: 10 },
    skip: !id,
  });
}

export default useDetailPageData;

import { useQuery, gql } from '@apollo/client';
import * as React from 'react';

const QUERY = gql`
  query GetCategories {
    search(location: "Los Angeles") {
      business {
        id
        name
      }
    }
  }
`;

function Welcome() {
  const { data } = useQuery(QUERY);

  console.log({ data });

  return <div>Welcome to the resto explorer</div>;
}

export default Welcome;

import React from "react";
import { useQuery, gql } from "@apollo/client";

const query = gql`
  query {
    business(id: "garaje-san-francisco") {
      id
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <div className="container">{JSON.stringify(data)}</div>;
}

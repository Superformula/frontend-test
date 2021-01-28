import React from "react";
import { useQuery, gql } from "@apollo/client";
import Button from "../src/components/Button";

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
  return (
    <div className="container">
      <Button>RAINBOwS</Button>
      {JSON.stringify(data)}
    </div>
  );
}

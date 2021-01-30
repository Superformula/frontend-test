import React, { useState } from "react";
import { useGetRestaurantsQuery } from "../src/dal/restaurant";
import { Category } from "../src/dal/categories";
import SelectCategories from "../src/components/SelectCategories";

export const LOCATION = "Las Vegas";

export default function Home() {
  const [cat, setCat] = useState<Category | undefined>();
  const { loading, error, data } = useGetRestaurantsQuery({
    variables: {
      location: LOCATION,
      openNow: true,
      //categories: ""
      price: "1,2,3",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const business = data?.search?.business || [];

  return (
    <div className="container">
      <SelectCategories value={cat} onChange={(cat) => setCat(cat)} />
      {business.map((business, index) => (
        <div key={index}>
          <h3>{business?.name}</h3>
          <p>{business?.price}</p>
          <p>{business?.rating}</p>
          <p>{business?.is_closed}</p>
          <p>{JSON.stringify(business?.categories)}</p>
        </div>
      ))}
    </div>
  );
}

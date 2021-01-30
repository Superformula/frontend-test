import React, { useState } from "react";
import { useGetRestaurantsQuery } from "../src/dal/restaurant";
import { Category } from "../src/dal/categories";
import SearchFilter, {
  IForm,
  INITIAL_VALUES,
} from "../src/components/SearchFilter";

export const LOCATION = "Las Vegas";

export default function Home() {
  const [filter, setFilter] = useState<IForm>(INITIAL_VALUES);
  const { loading, error, data } = useGetRestaurantsQuery({
    variables: {
      location: LOCATION,
      openNow: filter.isOpen,
      categories: filter.category?.alias,
      price: filter.price,
    },
  });

  //if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error :(</p>;

  const business = data?.search?.business || [];

  return (
    <div className="container">
      <SearchFilter value={filter} onChange={(filter) => setFilter(filter)} />
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

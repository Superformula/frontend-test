import React, { useState } from "react";
import { useGetRestaurantsQuery } from "../src/dal/restaurant";
import { Category } from "../src/dal/categories";
import SelectCategories from "../src/components/SelectCategories";
import SelectPrice from "../src/components/SelectPrice";
import Checkbox from "../src/components/Checkbox";

export const LOCATION = "Las Vegas";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [cat, setCat] = useState<Category | undefined>();
  const [price, setPrice] = useState<string>("");
  const { loading, error, data } = useGetRestaurantsQuery({
    variables: {
      location: LOCATION,
      openNow: isOpen,
      categories: cat?.alias,
      price,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const business = data?.search?.business || [];

  return (
    <div className="container">
      <Checkbox checked={isOpen} onChange={(e) => setIsOpen(e.target.checked)}>
        Open Now
      </Checkbox>
      <SelectPrice value={price} onChange={(price) => setPrice(price)} />
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

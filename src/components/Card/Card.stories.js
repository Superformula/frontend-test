import React from "react";

import Card from "./Card";

export default {
  component: Card,
  title: "Card"
};

const cardProps = {
  category: "thai",
  // image: ,
  headline: "Restaurant 2",
  rating: 4,
  price: "$$$",
  status: true
};

export const aCard = () => (
  <Card
    category={cardProps.category}
    // image: ,
    headline={cardProps.headline}
    rating={cardProps.rating}
    price={cardProps.price}
    status={cardProps.status}
  />
);

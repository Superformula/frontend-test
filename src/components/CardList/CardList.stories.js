import React from "react";

import CardList from "./CardList";
import Card from "../Card/Card";

export default {
  component: CardList,
  title: "CardList"
};

const cardProps = {
  category: "thai",
  // image: ,
  headline: "Restaurant 2",
  rating: 4,
  price: "$$$",
  status: true
};

export const aCardList = () => (
  <CardList>
    <Card
      category={cardProps.category}
      headline="This is a really long title, it will go to 2 lines."
      rating={cardProps.rating}
      price={cardProps.price}
      status={cardProps.status}
    />
    <Card
      category={cardProps.category}
      headline={cardProps.headline}
      rating={cardProps.rating}
      price={cardProps.price}
      status={cardProps.status}
    />
    <Card
      category={cardProps.category}
      headline={cardProps.headline}
      rating={cardProps.rating}
      price={cardProps.price}
      status={cardProps.status}
    />
    <Card
      category={cardProps.category}
      headline={cardProps.headline}
      rating={cardProps.rating}
      price={cardProps.price}
      status={false}
    />
  </CardList>
);

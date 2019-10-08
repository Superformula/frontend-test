import React from "react";

import Card from "./Card";
import { storiesOf } from "@storybook/react";
import notes from './Card.md';

const cardProps = {
  category: "thai",
  image: 'https://s3-media3.fl.yelpcdn.com/bphoto/ja1-oE6RiIWorNzty-A4Eg/o.jpg',
  name: "Restaurant 2",
  rating: 4,
  price: "$$$",
  status: true
};

export const CardStory = () => (
  <div style={{display: 'flex', width: '25%'}}>
    <Card
      category={cardProps.category}
      image={cardProps.image}
      name={cardProps.name}
      rating={cardProps.rating}
      price={cardProps.price}
      status={cardProps.status}
      id="123"
    />
  </div>
);

storiesOf("Card", module).add("A Card", () => 
  <CardStory />, 
  {notes: {notes} }
);

import React from "react";
import "./results-grid.scss";
import clsx from "clsx";
import Button from "../common/button";
import { SubTitle } from "../common/text";
import Card from '../result-card';

export default ({items}) => {

  return (
    <section className="results-grid">
      <SubTitle>All Restaurants</SubTitle>
      <section className="grid-container">
        {items.map(item => (
          <Card img={item.img}
          name={item.name}
          rating={item.rating}
          price={item.price}
          isOpen={item.isOpen} />
        ))}
      </section>
      <Button className="primary load-more" >Load More</Button>
    </section>
  );
};

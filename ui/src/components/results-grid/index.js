import React from "react";
import "./results-grid.scss";
import clsx from "clsx";
import Button from "../common/button";
import { SubTitle } from "../common/text";
import Card from "../result-card";

export default ({ items, onLoadMore, onDetailsClick }) => {
  return (
    <section className="results-grid">
      <SubTitle>All Restaurants</SubTitle>
      <section className="grid-container">
        {items.map((item) => (
          <Card
            id={item.id}
            key={item.id}
            img={item.img}
            name={item.name}
            rating={item.rating}
            price={item.price}
            isOpen={item.isOpen}
            category={item.category}
            onDetailsClick={onDetailsClick}
          />
        ))}
      </section>
      <Button onClick={onLoadMore} className="primary load-more">Load More</Button>
    </section>
  );
};

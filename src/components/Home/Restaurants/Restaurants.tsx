import * as React from "react";
import Button from "../../shared/Button/Button";
import RestaurantCard from "./RestaurantCard";
import { restaurantInfoExample } from "../../../declarations";

import styles from "./Restaurants.css";

const Restaurants: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>All Restaurants</h2>
      <div className={styles.restaurants}>
        <RestaurantCard id={"restaurant_id"} info={restaurantInfoExample} />
      </div>
      <div className={styles.footer}>
        <Button size="xl" type="secondary" handleClick={() => console.log("clicked")}>
          Load More
        </Button>
      </div>
    </section>
  );
};

export default Restaurants;

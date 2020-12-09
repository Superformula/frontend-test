import * as React from "react";
import Button from "../../shared/Button/Button";
import RestaurantCard from "./RestaurantCard";
import { SearchContext } from "../Home";
import { ISearchRestaurant } from "../../../declarations";

import styles from "./Restaurants.css";

const Restaurants: React.FC = () => {
  const { restaurants } = React.useContext(SearchContext);

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>All Restaurants</h2>
      <div className={styles.restaurants}>
        {restaurants.map((restaurant: ISearchRestaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
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

import * as React from "react";
import Filters from "./Filters/Filters";

import styles from "./Home.css";
import Restaurants from "./Restaurants/Restaurants";
import { useRestaurantState } from "./useRestaurantState";

export const RestaurantContext = React.createContext(null);

const Home: React.FC = () => {
  const restaurantState = useRestaurantState();
  // useMemo to avoid re-rendering everything everytime state changes
  const contextValue = React.useMemo(() => restaurantState, [restaurantState]);

  return (
    <RestaurantContext.Provider value={contextValue}>
      <div>
        <header className={styles.marginLeft}>
          <h1>Restaurants</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </header>
        <Filters />
        <Restaurants />
      </div>
    </RestaurantContext.Provider>
  );
};

export default Home;

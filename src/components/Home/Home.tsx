import * as React from "react";
import Filters from "./Filters/Filters";

import styles from "./Home.css";
import { useFiltersState } from "./useFilterState";

export const FiltersContext = React.createContext(null);

const Home: React.FC = () => {
  const filterState = useFiltersState();
  // useMemo to avoid re-rendering everything everytime state changes
  const contextValue = React.useMemo(() => filterState, [filterState]);

  return (
    <FiltersContext.Provider value={contextValue}>
      <div>
        <header className={styles.marginLeft}>
          <h1 className={styles.title}>Restaurants</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </header>
        <Filters />
        <section className={styles.marginLeft}>articles</section>
      </div>
    </FiltersContext.Provider>
  );
};

export default Home;

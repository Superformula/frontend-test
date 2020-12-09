import * as React from "react";
import Filters from "./Filters/Filters";

import styles from "./Home.css";
import Restaurants from "./Restaurants/Restaurants";
import { ISearchState, useSearchState } from "./useSearchState";

export const SearchContext = React.createContext<ISearchState>(null);

const Home: React.FC = () => {
  const searchState = useSearchState();
  // useMemo to avoid re-rendering everything everytime state changes
  const contextValue = React.useMemo(() => searchState, [searchState]);

  return (
    <SearchContext.Provider value={contextValue}>
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
    </SearchContext.Provider>
  );
};

export default Home;

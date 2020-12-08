import * as React from "react";
import RestaurantInfo from "../shared/RestaurantInfo/RestaurantInfo";
import { restaurantInfoExample } from "../../declarations";

import styles from "./Detail.css";

const Detail: React.FC = () => {
  return (
    <div>
      <header className={styles.marginLeft}>
        <RestaurantInfo variant="header" info={restaurantInfoExample} />
      </header>
    </div>
  );
};

export default Detail;

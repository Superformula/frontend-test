import * as React from "react";
import RestaurantInfo from "../shared/RestaurantInfo/RestaurantInfo";
import { restaurantInfoExample } from "../../declarations";
import { useParams } from "react-router-dom";

import styles from "./Detail.css";
import RestaurantMedia from "./RestaurantMedia/RestaurantMedia";
import Reviews from "./Reviews/Reviews";

const Detail: React.FC = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <header className={styles.marginLeft}>
        <RestaurantInfo variant="header" info={restaurantInfoExample} />
      </header>
      <RestaurantMedia urls={["1", "2", "3", "4"]} />
      <Reviews />
    </div>
  );
};

export default Detail;

import * as React from "react";
import OpenNow from "./OpenNow";
import Rating from "../Rating";
import { IRestaurantDetail, ISearchRestaurant } from "../../../api/yelpDeclarations";

import styles from "./RestaurantInfo.css";

interface Props {
  restaurant: ISearchRestaurant | IRestaurantDetail;
  variant?: "card" | "header";
}

const RestaurantInfo: React.FC<Props> = ({
  restaurant: { name, rating, price, category, isOpen },
  variant = "card",
}) => {
  const isHeader = variant === "header";
  const isCard = variant === "card";

  return (
    <div className={`${styles.info} ${isCard && styles.infoCard}`}>
      {isHeader && <h1>{name}</h1>}
      {isCard && <h5 className={styles.name}>{name}</h5>}
      <div className={styles.stars}>
        <Rating variant={variant} rating={rating} />
      </div>
      <div className={`${styles.details} ${isHeader && styles.detailsXl}`}>
        <div>{`${category} • ${price}`}</div>
        <OpenNow variant={variant} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default RestaurantInfo;

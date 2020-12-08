import * as React from "react";
import { IRestaurantInfo, restaurantInfoExample } from "../../../declarations";
import OpenNow from "./OpenNow";
import Rating from "../Rating";

import styles from "./RestaurantInfo.css";

interface Props {
  info: IRestaurantInfo;
  variant?: "card" | "header";
}

const RestaurantInfo: React.FC<Props> = ({
  info: { name, rating, price, category, isOpen },
  variant = "card",
}) => {
  const isHeader = variant === "header";

  return (
    <div className={styles.info}>
      {isHeader ? <h1>{name}</h1> : <h5 className={styles.name}>{name}</h5>}
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

RestaurantInfo.defaultProps = {
  variant: "card",
  info: restaurantInfoExample,
};

export default RestaurantInfo;

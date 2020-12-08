import * as React from "react";
import OpenNow from "../../shared/OpenNow/OpenNow";
import Button from "../../shared/Button/Button";
import Rating from "../../shared/Rating";

import styles from "./Restaurants.css";
import { useHistory } from "react-router-dom";

interface Props {
  id: string;
  name: string;
  rating: number;
  price: string;
  category: string;
  isOpen: boolean;
}

const RestaurantCard: React.FC<Props> = ({ id, name, rating, price, category, isOpen }) => {
  const history = useHistory();
  const handleClick = () => history.push(`/${id}`);

  return (
    <div className={styles.card}>
      <div className={styles.img} />
      <div className={styles.info}>
        <h5 className={styles.name}>{name}</h5>
        <div className={styles.stars}>
          <Rating rating={rating} />
        </div>
        <div className={styles.details}>
          <div>{`${category} • ${price}`}</div>
          <OpenNow isOpen={isOpen} />
        </div>
      </div>
      <Button type="primary" handleClick={handleClick}>
        Learn More
      </Button>
    </div>
  );
};

RestaurantCard.defaultProps = {
  id: "test",
  name: "Very Long Name Restaurants Number 1 In List",
  rating: 3.5,
  price: "$$$",
  category: "Thai",
  isOpen: true,
};

export default RestaurantCard;

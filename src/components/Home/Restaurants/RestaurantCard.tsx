import * as React from "react";
import Button from "../../shared/Button/Button";
import { useHistory } from "react-router-dom";
import RestaurantInfo from "components/shared/RestaurantInfo/RestaurantInfo";
import { ISearchRestaurant } from "../../../api/yelpDeclarations";

import styles from "./Restaurants.css";

interface Props {
  restaurant: ISearchRestaurant;
}

const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  const history = useHistory();
  const handleClick = () => history.push(`/${restaurant.id}`);

  return (
    <div className={styles.card}>
      <div className={styles.img} />
      <RestaurantInfo variant="card" restaurant={restaurant} />
      <Button type="primary" handleClick={handleClick}>
        Learn More
      </Button>
    </div>
  );
};

export default RestaurantCard;

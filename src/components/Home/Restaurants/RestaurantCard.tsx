import * as React from "react";
import Button from "../../shared/Button/Button";
import { useHistory } from "react-router-dom";
import { IRestaurantInfo, restaurantInfoExample } from "../../../declarations";
import RestaurantInfo from "components/shared/RestaurantInfo/RestaurantInfo";

import styles from "./Restaurants.css";

interface Props {
  info: IRestaurantInfo;
  id: string;
}

const RestaurantCard: React.FC<Props> = ({ info, id }) => {
  const history = useHistory();
  const handleClick = () => history.push(`/${id}`);

  return (
    <div className={styles.card}>
      <div className={styles.img} />
      <RestaurantInfo variant="card" info={info} />
      <Button type="primary" handleClick={handleClick}>
        Learn More
      </Button>
    </div>
  );
};

RestaurantCard.defaultProps = {
  id: "test",
  info: restaurantInfoExample,
};

export default RestaurantCard;

import * as React from "react";
import RestaurantInfo from "../shared/RestaurantInfo/RestaurantInfo";
import { useParams } from "react-router-dom";

import styles from "./Detail.css";
import RestaurantMedia from "./RestaurantMedia/RestaurantMedia";
import Reviews from "./Reviews/Reviews";
import { IRestaurantDetail } from "../../api/yelpDeclarations";
import { fetchRestaurant } from "src/api/yelp";

interface RouteParams {
  id: string;
}

const Detail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [restaurant, setRestaurant] = React.useState<IRestaurantDetail>(null);

  React.useEffect(() => {
    async function init() {
      const restaurant = await fetchRestaurant(id);
      setRestaurant(restaurant);
    }

    init();
  });

  // TODO: add spinner
  if (!restaurant) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <header className={styles.marginLeft}>
        <RestaurantInfo variant="header" restaurant={restaurant} />
      </header>
      <RestaurantMedia urls={restaurant.photos} />
      <Reviews restaurant={restaurant} />
    </div>
  );
};

export default Detail;

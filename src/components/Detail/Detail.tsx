import * as React from "react";
import RestaurantInfo from "../shared/RestaurantInfo/RestaurantInfo";
import { useParams } from "react-router-dom";

import styles from "./Detail.css";
import RestaurantMedia from "./RestaurantMedia/RestaurantMedia";
import Reviews from "./Reviews/Reviews";
import Spinner from "../shared/Spinner/Spinner";
import { useRestaurantState } from "./useRestaurantState";

interface RouteParams {
  id: string;
}

const Detail: React.FC = () => {
  const { id } = useParams<RouteParams>();

  const { restaurant, loadingState } = useRestaurantState(id);
  switch (loadingState) {
    case "LOADING":
      return <Spinner />;
    case "ERROR":
      return <div>Error</div>;
    case "SUCCESS":
      return (
        <div>
          <header className={styles.marginLeft}>
            <RestaurantInfo variant="header" restaurant={restaurant} />
          </header>
          <RestaurantMedia urls={restaurant.photos} />
          <Reviews restaurant={restaurant} />
        </div>
      );
  }
};

export default Detail;

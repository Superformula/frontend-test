import * as React from "react";
import RestaurantInfo from "../shared/RestaurantInfo/RestaurantInfo";
import { useHistory, useParams } from "react-router-dom";

import styles from "./Detail.css";
import RestaurantMedia from "./RestaurantMedia/RestaurantMedia";
import Reviews from "./Reviews/Reviews";
import Spinner from "../shared/Spinner/Spinner";
import { useRestaurantState } from "./useRestaurantState";
import Button from "components/shared/Button/Button";

interface RouteParams {
  id: string;
}

const Detail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const history = useHistory();
  const navigateHome = () => history.push("/");

  const { restaurant, loadingState } = useRestaurantState(id);
  switch (loadingState) {
    case "LOADING":
      return <Spinner />;
    case "ERROR":
      return <div>An error ocurred.</div>;
    case "SUCCESS":
      return (
        <div>
          <header className={styles.marginLeft}>
            <RestaurantInfo variant="header" restaurant={restaurant} />
          </header>
          <RestaurantMedia urls={restaurant.photos} />
          <Reviews restaurant={restaurant} />
          <footer>
            <Button type="secondary" size="xl" handleClick={navigateHome}>
              Explore Alternatives
            </Button>
          </footer>
        </div>
      );
  }
};

export default Detail;

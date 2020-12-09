import * as React from "react";
import RestaurantInfo from "../shared/RestaurantInfo/RestaurantInfo";
import { useParams } from "react-router-dom";

import styles from "./Detail.css";
import RestaurantMedia from "./RestaurantMedia/RestaurantMedia";
import Reviews from "./Reviews/Reviews";
import { IRestaurantDetail } from "../../api/yelpDeclarations";
import { fetchRestaurant } from "src/api/yelp";
import Spinner from "../shared/Spinner/Spinner";

interface RouteParams {
  id: string;
}

export type ILoadingState = "IDLE" | "SUCCESS" | "LOADING" | "ERROR";

interface IState {
  restaurant: IRestaurantDetail;
  loadingState: ILoadingState;
}

interface fetchRestaurantAction {
  type: "FETCH_RESTAURANT";
}

interface fetchRestaurantSuccessAction {
  type: "FETCH_RESTAURANT_SUCCESS";
  restaurant: IRestaurantDetail;
}

interface fetchRestaurantErrorAction {
  type: "FETCH_RESTAURANT_ERROR";
}

type IDetailActions =
  | fetchRestaurantAction
  | fetchRestaurantSuccessAction
  | fetchRestaurantErrorAction;

const Detail: React.FC = () => {
  const initialState: IState = { restaurant: null, loadingState: "IDLE" };

  const reducer = (state: IState, action: IDetailActions) => {
    switch (action.type) {
      case "FETCH_RESTAURANT":
        return { ...state, loadingState: "LOADING" };
      case "FETCH_RESTAURANT_SUCCESS":
        return { loadingState: "SUCCESS", restaurant: action.restaurant };
      case "FETCH_RESTAURANT_ERROR":
        return { ...state, loadingState: "ERROR" };
      default:
        throw new Error("action type not found");
    }
  };

  const [{ restaurant, loadingState }, dispatch] = React.useReducer(reducer, initialState);
  const { id } = useParams<RouteParams>();

  React.useEffect(() => {
    async function init() {
      dispatch({ type: "FETCH_RESTAURANT" });
      const restaurant = await fetchRestaurant(id);
      if (restaurant) {
        dispatch({ type: "FETCH_RESTAURANT_SUCCESS", restaurant });
      } else {
        dispatch({ type: "FETCH_RESTAURANT_ERROR" });
      }
    }

    init();
  }, [id]);

  switch (loadingState) {
    case "IDLE":
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

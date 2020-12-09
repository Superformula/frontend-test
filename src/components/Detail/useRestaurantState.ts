import { useEffect, useReducer } from "react";
import { fetchRestaurant } from "src/api/yelp";
import { IState, IDetailActions, ILoadingState } from "./useRestaurantStateDeclarations";

const initialState: IState = { restaurant: null, loadingState: "LOADING" };

const reducer = (state: IState, action: IDetailActions) => {
  switch (action.type) {
    case "FETCH_RESTAURANT":
      return { ...state, loadingState: "LOADING" as ILoadingState };
    case "FETCH_RESTAURANT_SUCCESS":
      return { loadingState: "SUCCESS" as ILoadingState, restaurant: action.restaurant };
    case "FETCH_RESTAURANT_ERROR":
      return { ...state, loadingState: "ERROR" as ILoadingState };
    default:
      throw new Error("action type not found");
  }
};

export const useRestaurantState = (id: string): IState => {
  const [{ restaurant, loadingState }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
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

  return { restaurant, loadingState };
};

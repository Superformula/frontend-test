import { useEffect, useReducer } from "react";
import { fetchRestaurant } from "../../api/yelp";
import { IState, IDetailActions } from "./useRestaurantStateDeclarations";
import { ILoadingState } from "../../declarations";

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
      return state;
  }
};

export const useRestaurantState = (id: string): IState => {
  const [{ restaurant, loadingState }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function init() {
      try {
        dispatch({ type: "FETCH_RESTAURANT" });
        const restaurant = await fetchRestaurant(id);
        dispatch({ type: "FETCH_RESTAURANT_SUCCESS", restaurant });
      } catch {
        dispatch({ type: "FETCH_RESTAURANT_ERROR" });
      }
    }

    init();
  }, [id]);

  return { restaurant, loadingState };
};

import { IRestaurantDetail } from "../../api/yelpDeclarations";

export type ILoadingState = "SUCCESS" | "LOADING" | "ERROR";

export interface IState {
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

export type IDetailActions =
  | fetchRestaurantAction
  | fetchRestaurantSuccessAction
  | fetchRestaurantErrorAction;

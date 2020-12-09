import { ILoadingState, ISearchRestaurant } from "../../declarations";

export interface IFilters {
  isOpen: boolean;
  price: string;
  category: string;
}

interface ToggleOpenAction {
  type: "TOGGLE_OPEN";
}

interface UpdatePriceAction {
  type: "UPDATE_PRICE";
  price: string;
}

interface UpdateCategoryAction {
  type: "UPDATE_CATEGORY";
  category: string;
}

interface ClearAllAction {
  type: "CLEAR_ALL";
}

export type IFiltersActions =
  | ToggleOpenAction
  | UpdatePriceAction
  | UpdateCategoryAction
  | ClearAllAction;

export interface IRestaurants {
  restaurants: ISearchRestaurant[];
  loadingState: ILoadingState;
}

interface FetchRestaurantsAction {
  type: "FETCH_RESTAURANTS";
}

interface FetchRestaurantsSuccessAction {
  type: "FETCH_RESTAURANTS_SUCCESS";
  restaurants: ISearchRestaurant[];
}

interface FetchRestaurantsErrorAction {
  type: "FETCH_RESTAURANTS_ERROR";
}

export type IRestaurantsAction =
  | FetchRestaurantsAction
  | FetchRestaurantsErrorAction
  | FetchRestaurantsSuccessAction;

export interface ISearchState {
  filterValues: IFilters;
  toggleOpen: () => void;
  updatePrice: (price: string) => void;
  updateCategory: (category: string) => void;
  clearAll: () => void;
  priceOptions: string[];
  categoryOptions: string[];
  restaurants: ISearchRestaurant[];
  loadingState: ILoadingState;
}

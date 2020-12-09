import { ISearchRestaurant } from "../../declarations";

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

export interface ISearchState {
  filterValues: IFilters;
  toggleOpen: () => void;
  updatePrice: (price: string) => void;
  updateCategory: (category: string) => void;
  clearAll: () => void;
  priceOptions: string[];
  categoryOptions: string[];
  restaurants: ISearchRestaurant[];
}

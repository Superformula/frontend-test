import * as React from "react";

interface IFilters {
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

type IFiltersActions = ToggleOpenAction | UpdatePriceAction | UpdateCategoryAction | ClearAllAction;

interface IFiltersState {
  filterValues: IFilters;
  toggleOpen: () => void;
  updatePrice: (price: string) => void;
  updateCategory: (category: string) => void;
  clearAll: () => void;
  priceOptions: string[];
}

export const useFiltersState = (): IFiltersState => {
  const initialState: IFilters = { isOpen: false, price: "All", category: "All" };

  const reducer = (state: IFilters, action: IFiltersActions) => {
    switch (action.type) {
      case "TOGGLE_OPEN":
        return { ...state, isOpen: !state.isOpen };
      case "UPDATE_PRICE":
        return { ...state, price: action.price };
      case "UPDATE_CATEGORY":
        return { ...state, category: action.category };
      case "CLEAR_ALL":
        return initialState;
      default:
        throw new Error("action type not found");
    }
  };
  const toggleOpen = React.useCallback(() => dispatch({ type: "TOGGLE_OPEN" }), []);
  const updatePrice = React.useCallback(
    (price: string) => dispatch({ type: "UPDATE_PRICE", price }),
    []
  );
  const updateCategory = React.useCallback(
    (category: string) => dispatch({ type: "UPDATE_CATEGORY", category }),
    []
  );
  const clearAll = React.useCallback(() => dispatch({ type: "CLEAR_ALL" }), []);
  const priceOptions = ["All", "$", "$$", "$$$", "$$$$"];
  const [filterValues, dispatch] = React.useReducer(reducer, initialState);
  return { filterValues, toggleOpen, updatePrice, updateCategory, clearAll, priceOptions };
};

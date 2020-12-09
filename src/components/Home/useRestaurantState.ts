import * as React from "react";
import { ICategory, ISearchRestaurant } from "../../api/yelpDeclarations";
import { fetchCategories, fetchRestaurants } from "../../api/yelp";

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

interface IRestaurantState {
  filterValues: IFilters;
  toggleOpen: () => void;
  updatePrice: (price: string) => void;
  updateCategory: (category: string) => void;
  clearAll: () => void;
  priceOptions: string[];
  categoryOptions: string[];
  restaurants: ISearchRestaurant[];
}

const filterOpen = (restaurant: ISearchRestaurant, isOpen: boolean) => {
  if (!isOpen) {
    return true;
  }
  return restaurant.isOpen;
};

const filterPrice = (restaurant: ISearchRestaurant, price: string) => {
  if (price === "All") {
    return true;
  }
  return restaurant.price === price;
};

const filterCategory = (restaurant: ISearchRestaurant, category: string) => {
  if (category === "All") {
    return true;
  }

  return restaurant.category === category;
};

export const useRestaurantState = (): IRestaurantState => {
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
  const [filterValues, dispatch] = React.useReducer(reducer, initialState);
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
  const priceOptions = ["$", "$$", "$$$", "$$$$"];
  const [categories, setCategories] = React.useState<ICategory[]>([]);
  const categoryOptions = categories.map((category: ICategory) => category.title);

  const [loadedRestaurants, setLoadedRestaurants] = React.useState<ISearchRestaurant[]>([]);

  const restaurants = loadedRestaurants
    .filter((restaurant) => filterOpen(restaurant, filterValues.isOpen))
    .filter((restaurant) => filterPrice(restaurant, filterValues.price))
    .filter((restaurant) => filterCategory(restaurant, filterValues.category));

  React.useEffect(() => {
    async function init() {
      const categoryList = await fetchCategories();
      setCategories(categoryList);
      const restaurantList = await fetchRestaurants();
      setLoadedRestaurants(restaurantList);
    }

    init();
  }, [setCategories]);

  return {
    filterValues,
    toggleOpen,
    updatePrice,
    updateCategory,
    clearAll,
    priceOptions,
    categoryOptions,
    restaurants,
  };
};

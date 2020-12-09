import { useState, useEffect, useCallback, useReducer } from "react";
import { ICategory, ISearchRestaurant } from "../../declarations";
import { fetchCategories, fetchRestaurants } from "../../api/yelp";
import { ISearchState, IFiltersActions, IFilters } from "./useSearchStateDeclarations";

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

export const useSearchState = (): ISearchState => {
  const [filterValues, dispatch] = useReducer(reducer, initialState);
  const toggleOpen = useCallback(() => dispatch({ type: "TOGGLE_OPEN" }), []);
  const updatePrice = useCallback((price: string) => dispatch({ type: "UPDATE_PRICE", price }), []);
  const updateCategory = useCallback(
    (category: string) => dispatch({ type: "UPDATE_CATEGORY", category }),
    []
  );
  const clearAll = useCallback(() => dispatch({ type: "CLEAR_ALL" }), []);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const categoryOptions = categories.map((category: ICategory) => category.title);
  const priceOptions = ["$", "$$", "$$$", "$$$$"];

  const [loadedRestaurants, setLoadedRestaurants] = useState<ISearchRestaurant[]>([]);

  const filteredRestaurants = loadedRestaurants
    .filter((restaurant) => filterOpen(restaurant, filterValues.isOpen))
    .filter((restaurant) => filterPrice(restaurant, filterValues.price))
    .filter((restaurant) => filterCategory(restaurant, filterValues.category));

  useEffect(() => {
    async function init() {
      const categoryList = await fetchCategories();
      setCategories(categoryList);
      const restaurantList = await fetchRestaurants();
      setLoadedRestaurants(restaurantList);
    }

    init();
  }, [setCategories, setLoadedRestaurants]);

  return {
    filterValues,
    toggleOpen,
    updatePrice,
    updateCategory,
    clearAll,
    priceOptions,
    categoryOptions,
    restaurants: filteredRestaurants,
  };
};

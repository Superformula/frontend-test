import { useState, useEffect, useCallback, useReducer } from "react";
import { ICategory, ILoadingState, ISearchRestaurant } from "../../declarations";
import { fetchCategories, fetchRestaurants } from "../../api/yelp";
import {
  ISearchState,
  IFiltersActions,
  IFilters,
  IRestaurantsAction,
  IRestaurants,
} from "./useSearchStateDeclarations";

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

const initialFilters: IFilters = { isOpen: false, price: "All", category: "All" };

const filtersReducer = (state: IFilters, action: IFiltersActions) => {
  switch (action.type) {
    case "TOGGLE_OPEN":
      return { ...state, isOpen: !state.isOpen };
    case "UPDATE_PRICE":
      return { ...state, price: action.price };
    case "UPDATE_CATEGORY":
      return { ...state, category: action.category };
    case "CLEAR_ALL":
      return initialFilters;
    default:
      return state;
  }
};

const initialRestaurants: IRestaurants = { restaurants: [], loadingState: "LOADING" };

const restaurantsReducer = (state: IRestaurants, action: IRestaurantsAction) => {
  switch (action.type) {
    case "FETCH_RESTAURANTS":
      return { ...state, loadingState: "LOADING" as ILoadingState };
    case "FETCH_RESTAURANTS_SUCCESS":
      return { loadingState: "SUCCESS" as ILoadingState, restaurants: action.restaurants };
    case "FETCH_RESTAURANTS_ERROR":
      return { ...state, loadingState: "ERROR" as ILoadingState };
    default:
      return state;
  }
};

export const useSearchState = (): ISearchState => {
  const [filterValues, dispatch] = useReducer(filtersReducer, initialFilters);
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

  const [{ restaurants, loadingState }, dispatchRestaurants] = useReducer(
    restaurantsReducer,
    initialRestaurants
  );

  const filteredRestaurants = restaurants
    .filter((restaurant) => filterOpen(restaurant, filterValues.isOpen))
    .filter((restaurant) => filterPrice(restaurant, filterValues.price))
    .filter((restaurant) => filterCategory(restaurant, filterValues.category));

  useEffect(() => {
    async function init() {
      try {
        const categoryList = await fetchCategories();
        setCategories(categoryList);
        const restaurants = await fetchRestaurants();
        dispatchRestaurants({ type: "FETCH_RESTAURANTS_SUCCESS", restaurants });
      } catch (error) {
        dispatchRestaurants({ type: "FETCH_RESTAURANTS_ERROR" });
      }
    }

    init();
  }, [setCategories, dispatchRestaurants]);

  return {
    filterValues,
    toggleOpen,
    updatePrice,
    updateCategory,
    clearAll,
    priceOptions,
    categoryOptions,
    restaurants: filteredRestaurants,
    loadingState,
  };
};

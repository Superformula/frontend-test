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

const initialRestaurants: IRestaurants = { restaurants: [], loadingState: "LOADING", offset: 0 };

const restaurantsReducer = (state: IRestaurants, action: IRestaurantsAction) => {
  switch (action.type) {
    case "FETCH_RESTAURANTS":
      return { ...state, loadingState: "LOADING" as ILoadingState };
    case "FETCH_RESTAURANTS_SUCCESS":
      return {
        loadingState: "SUCCESS" as ILoadingState,
        restaurants: action.restaurants,
        offset: action.restaurants.length,
      };
    case "FETCH_RESTAURANTS_ERROR":
      return { ...state, loadingState: "ERROR" as ILoadingState };
    case "RESET_OFFSET":
      return { ...state, offset: 0 };
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

  const [{ restaurants, loadingState, offset }, dispatchRestaurants] = useReducer(
    restaurantsReducer,
    initialRestaurants
  );

  const filteredRestaurants = restaurants
    .filter((restaurant) => filterOpen(restaurant, filterValues.isOpen))
    .filter((restaurant) => filterPrice(restaurant, filterValues.price));

  useEffect(() => {
    async function init() {
      const categoryList = await fetchCategories();
      setCategories(categoryList);
    }

    init();
  }, [setCategories]);

  useEffect(() => {
    async function filterByCategory() {
      try {
        dispatchRestaurants({ type: "FETCH_RESTAURANTS" });
        dispatchRestaurants({ type: "RESET_OFFSET" });
        const category = categories.find((category) => category.title === filterValues.category);
        const newRestaurants = await fetchRestaurants(0, category?.alias);
        dispatchRestaurants({ type: "FETCH_RESTAURANTS_SUCCESS", restaurants: newRestaurants });
      } catch (error) {
        dispatchRestaurants({ type: "FETCH_RESTAURANTS_ERROR" });
      }
    }

    filterByCategory();
  }, [categories, filterValues.category, dispatchRestaurants]);

  async function loadMore() {
    try {
      dispatchRestaurants({ type: "FETCH_RESTAURANTS" });
      const category = categories.find((category) => category.title === filterValues.category);
      const oldRestaurants = restaurants;
      const newRestaurants = await fetchRestaurants(offset, category?.alias);
      dispatchRestaurants({
        type: "FETCH_RESTAURANTS_SUCCESS",
        restaurants: [...oldRestaurants, ...newRestaurants],
      });
    } catch (error) {
      dispatchRestaurants({ type: "FETCH_RESTAURANTS_ERROR" });
    }
  }

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
    loadMore,
  };
};

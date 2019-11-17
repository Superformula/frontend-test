export const getCurrentRestaurantCategory = (state) => {
    if (state.yelp.restaurants.data)
        return state.yelp.restaurants.data.currentCategory;
    else
        return undefined;
}

export const getCurrentRestaurantOffset = (state) => {
    if (state.yelp.restaurants.data)
        return state.yelp.restaurants.data.currentOffsetForCategory
    else
        return 0;
}

export const getRestaurantsAsArray = (state) => {
    if (state.yelp.restaurants.data)
        return Object.values(state.yelp.restaurants.data.restaurantMap);
    else
        return [];
}
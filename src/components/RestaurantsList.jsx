import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { businesses, restaurantsList, title } from './restaurantsList.module.scss';
import Restaurant from './Restaurant';

const filterRestaurants = (restaurants, openNow, selectedPrice, selectedCategory) => {
    return (openNow
        ? restaurants.filter(restaurant => {
              if (restaurant.hours[0].is_open_now) {
                  return restaurant;
              }
          })
        : [...restaurants]
    )
        .filter(restaurant => {
            if (selectedPrice === 'all') {
                return restaurant;
            }
            if (restaurant.price === selectedPrice) {
                return restaurant;
            }
        })
        .filter(restaurant => {
            if (selectedCategory === 'all') {
                return restaurant;
            }
            if (restaurant.categories[0].title.toLowerCase() === selectedCategory) {
                return restaurant;
            }
        });
};

const RestaurantsList = ({ restaurantsLoading, restaurants, openNow, selectedPrice, selectedCategory }) => {
    const filteredRestaurants = filterRestaurants(restaurants, openNow, selectedPrice, selectedCategory);
    return (
        <div className={classNames(businesses, 'contentContainer')}>
            <div className={title}>All Restaurants</div>
            <div className={restaurantsList}>
                {filteredRestaurants.map(restaurant => (
                    <Restaurant key={restaurant.id} restaurant={restaurant} />
                ))}
            </div>
        </div>
    );
};

RestaurantsList.propTypes = {
    restaurantsLoading: PropTypes.bool,
    restaurants: PropTypes.array,
    openNow: PropTypes.bool,
    selectedPrice: PropTypes.string,
    selectedCategory: PropTypes.string
};

export default connect(
    state => ({
        restaurantsLoading: state.restaurantsLoading,
        restaurants: state.restaurants,
        openNow: state.openNow,
        selectedPrice: state.selectedPrice,
        selectedCategory: state.selectedCategory
    }),
    null
)(RestaurantsList);

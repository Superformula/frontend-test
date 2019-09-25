import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contentContainer } from 'scss/layout.module.scss';
import { headerSpacer, restaurantsList, title, loadMoreButton } from './restaurantsList.module.scss';
import Restaurant from '../Restaurant/Restaurant';
import Loader from '../Loader/Loader';
import { getRestaurants } from '../../store/actions';
const filterRestaurants = (restaurants, openNow, selectedPrice, selectedCategory) => {
	return (openNow
		? restaurants.filter(restaurant => {
				if (restaurant.hours[0].is_open_now) {
					return restaurant;
				}
				return null;
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

const VertSpacer = ({ height }) => <div style={{ width: '100%', height: `${height}px` }} />;
VertSpacer.propTypes = { height: PropTypes.number };

export const RestaurantsList = ({
	restaurantsLoading,
	restaurants,
	openNow,
	selectedPrice,
	selectedCategory,
	queryOffset,
	onGetRestaurants
}) => {
	const filteredRestaurants = filterRestaurants(restaurants, openNow, selectedPrice, selectedCategory);
	const showMainLoader = restaurantsLoading && restaurants.length === 0;
	const showLoadMoreLoader = restaurantsLoading && restaurants.length > 0;
	return (
		<div>
			<div className={headerSpacer} />
			<VertSpacer height={385} />
			<div className={contentContainer}>
				{showMainLoader ? (
					<Loader />
				) : (
					<React.Fragment>
						<div className={title}>All Restaurants</div>
						<div className={restaurantsList}>
							{filteredRestaurants.map(restaurant => (
								<Restaurant key={restaurant.id} restaurant={restaurant} />
							))}
						</div>
						{showLoadMoreLoader ? (
							<Loader />
						) : (
							<div
								className={loadMoreButton}
								onClick={() => {
									onGetRestaurants(queryOffset);
								}}
							>
								LOAD MORE
							</div>
						)}
						<VertSpacer height={100} />
					</React.Fragment>
				)}
			</div>
		</div>
	);
};

RestaurantsList.propTypes = {
	restaurantsLoading: PropTypes.bool,
	restaurants: PropTypes.array,
	openNow: PropTypes.bool,
	selectedPrice: PropTypes.string,
	selectedCategory: PropTypes.string,
	queryOffset: PropTypes.number,
	onGetRestaurants: PropTypes.func
};

export default connect(
	state => ({
		restaurantsLoading: state.restaurantsLoading,
		restaurants: state.restaurants,
		openNow: state.openNow,
		selectedPrice: state.selectedPrice,
		selectedCategory: state.selectedCategory,
		queryOffset: state.queryOffset
	}),
	{ onGetRestaurants: getRestaurants }
)(RestaurantsList);

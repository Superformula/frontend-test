import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Filters from '../Filters/Filters';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import { getRestaurants, clearRestaurants } from '../../store/actions';
import { divider } from 'scss/layout.module.scss';
import { description, stickyTop } from './AllRestaurants.module.scss';

const AllRestaurants = ({ onGetRestaurants, onClearRestaurants }) => {
	useEffect(() => {
		onClearRestaurants();
		onGetRestaurants();
	}, [onGetRestaurants, onClearRestaurants]);
	return (
		<div>
			<div className={stickyTop}>
				<Header headerTitle="Restaurants">
					<div className={description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</div>
				</Header>
				<div className={divider} />
				<Filters />
				<div className={divider} />
			</div>
			<RestaurantsList />
		</div>
	);
};

AllRestaurants.propTypes = {
	onGetRestaurants: PropTypes.func,
	onClearRestaurants: PropTypes.func
};

const mapStateToProps = state => ({
	restaurantsLoading: state.restaurantsLoading
});
export default connect(
	mapStateToProps,
	{
		onGetRestaurants: getRestaurants,
		onClearRestaurants: clearRestaurants
	}
)(AllRestaurants);

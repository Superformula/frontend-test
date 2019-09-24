import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Filters from '../Filters/Filters';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import { getRestaurants } from '../../store/actions';
// TODO refactor for main view scss
import { description, stickyTop } from '../Header/Header.module.scss';

const App = ({ onGetRestaurants, queryOffset }) => {
	useEffect(() => {
		// TODO clear restaurants + query offset here
		onGetRestaurants(queryOffset);
	}, []);
	return (
		<div>
			<div className={stickyTop}>
				<Header headerTitle="Restaurants">
					<div className={description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</div>
				</Header>
				<div className="divider" />
				<Filters />
				<div className="divider" />
			</div>
			<RestaurantsList />
		</div>
	);
};

App.propTypes = {
	queryOffset: PropTypes.number,
	onGetRestaurants: PropTypes.func
};

const mapStateToProps = state => ({
	restaurantsLoading: state.restaurantsLoading,
	queryOffset: state.queryOffset
});
export default connect(
	mapStateToProps,
	{
		onGetRestaurants: getRestaurants
	}
)(App);

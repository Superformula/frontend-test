import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import Filters from './Filters';
import RestaurantsList from './RestaurantsList';
import { fetchRestaurants, fetchCategories } from '../store/actions';
import Loader from './Loader';

const App = ({ restaurantsLoading, fetchRestaurants, fetchCategories, queryOffset }) => {
    useEffect(() => {
        // fetchCategories();
        fetchRestaurants(queryOffset);
    }, []);
    return (
        <div>
            <Loader loading={restaurantsLoading} />
            <Header />
            <div className="divider" />
            <Filters />
            <div className="divider" />
            <RestaurantsList />
        </div>
    );
};

App.propTypes = {
    restaurantsLoading: PropTypes.bool,
    queryOffset: PropTypes.number,
    fetchRestaurants: PropTypes.func,
    fetchCategories: PropTypes.func
};

const mapStateToProps = state => ({
    restaurantsLoading: state.restaurantsLoading,
    queryOffset: state.queryOffset
});
export default connect(
    mapStateToProps,
    {
        fetchCategories,
        fetchRestaurants
    }
)(App);

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import Filters from './Filters';
import RestaurantsList from './RestaurantsList';
import { fetchRestaurants, fetchCategories } from '../store/actions';
// TODO refactor for main view scss
import { description, stickyTop } from './Header.module.scss';

const App = ({ restaurantsLoading, fetchRestaurants, fetchCategories, queryOffset }) => {
    useEffect(() => {
        // fetchCategories();
        // TODO clear restaurants + query offset
        fetchRestaurants(queryOffset);
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

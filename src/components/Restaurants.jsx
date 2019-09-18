import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { header, title, description } from './restaurants.module.scss';

const Restaurants = ({ restaurantsLoading }) => {
    return (
        <div className={header}>
            <div className={title}>Restaurants</div>
            <div className={description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </div>
        </div>
    );
};

Restaurants.propTypes = {
    loading: PropTypes.bool
};

export default connect(
    state => {
        return { restaurantsLoading: state.toJS().restaurantsLoading };
    },
    null
)(Restaurants);

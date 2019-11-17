import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header';
import RestaurantFilterer from '../components/RestaurantFilterer';
import RestaurantCardsSection from '../components/RestaurantCardsSection';

import './RestaurantsPage.scss';

const RestaurantsPage = (props) => {
    return (
        <div className='restaurants-page'>
            <Header title="Restaurant" description="This is the description" className="restaurant-header" />
            <RestaurantFilterer />
            <RestaurantCardsSection restaurants={ [0, 1, 2, 3, 4, 5, 6, 7] } />
            <button onClick={ () => props.history.push('/restaurant-details/123456') }>Go to details page</button>
        </div>
    );
};

export default withRouter(RestaurantsPage);
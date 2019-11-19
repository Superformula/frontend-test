import React from 'react';
import PropTypes from 'prop-types';

import './RestaurantCardsSection.scss';
import RestaurantCard from './RestaurantCard';
import Button from './atoms/Button';
import { haveNotFinishedLoading } from '../reducers/reducerUtils/LoadingStatus';
import LoadingSpinner from './atoms/LoadingSpinner';

class RestaurantCardsSection extends React.PureComponent {
    renderRestaurantCard = restaurant => {
        return (
            <RestaurantCard
                key={ restaurant.id }
                alias={ restaurant.alias }
                name={ restaurant.name }
                stars={ restaurant.rating }
                category={ restaurant.categories[0].title }
                price={ restaurant.price || '' }
                isOpen={ !restaurant.is_closed }
                imageUrl={ restaurant.image_url }
            />
        );
    }

    areThereAnyRestaurants = () => this.props.restaurants.length > 0;

    renderRestaurantCards = () => {
        if (this.areThereAnyRestaurants())
            return this.props.restaurants.map(this.renderRestaurantCard);
        else
            return <div style={ { paddingTop: '1em' } }>No Restaurants Available</div>;
    };

    haveRestaurantsLoaded = () => !haveNotFinishedLoading(this.props.restaurantsLoadingStatus);

    renderCardsContainer = () => {
        if (this.haveRestaurantsLoaded())
            return (
                <div className='restaurant-cards-container'>
                    { this.renderRestaurantCards() }
                </div>
            );
        else
            return <LoadingSpinner />;
    };

    loadMoreButton = () => (
        <Button
            text='LOAD MORE'
            disabled={ !this.areThereAnyRestaurants() || !this.haveRestaurantsLoaded() }
            onClick={ () => this.props.onLoadMoreClicked() }
            className='load-more-button'
            large
        />
    );

    render() {
        return (
            <div className='restaurant-cards-section' >
                <h2>{ this.props.title }</h2>
                { this.renderCardsContainer() }
                { this.loadMoreButton() }
            </div>
        );
    }
}

RestaurantCardsSection.propTypes = {
    title: PropTypes.string,
    restaurants: PropTypes.array,
    restaurantsLoadingStatus: PropTypes.string,
    onLoadMoreClicked: PropTypes.func
}

export default RestaurantCardsSection;
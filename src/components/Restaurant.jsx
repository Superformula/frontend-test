import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import {
    restaurantContainer,
    restaurantImage,
    restaurantName,
    starRating,
    info,
    learnMoreButton
} from './restaurant.module.scss';
import OpenNowIndicator from './OpenNow/OpenNowIndicator';
import Loader from './Loader';

const Restaurant = ({ restaurant }) => {
    const { photos, name, rating, categories, price, hours, id } = restaurant;
    return (
        <div className={restaurantContainer}>
            <img className={restaurantImage} src={photos[0]} />
            <div className={restaurantName}>{name}</div>
            <div className={starRating}>
                <StarRatings
                    rating={rating}
                    starDimension="20px"
                    starSpacing="1px"
                    starRatedColor={'rgb(0, 43, 86)'}
                    starEmptyColor={'rgb(216, 216, 216)'}
                />
            </div>
            <div className={info}>
                {`${categories[0].title.toUpperCase()} • ${price}`}
                <OpenNowIndicator openNow={hours[0].is_open_now} />
            </div>
            <div className={learnMoreButton}>
                <Link to={`/detail/${encodeURIComponent(id)}`} onClick={() => {}}>
                    <div>LEARN MORE</div>
                </Link>
            </div>
        </div>
    );
};

Restaurant.propTypes = { restaurant: PropTypes.object };

export default Restaurant;

import React from 'react';
import PropTypes from 'prop-types';
import truncate from 'truncate';
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
import Rating from './Rating';

const Restaurant = ({ restaurant }) => {
    const { photos, name, rating, categories, price, hours, id } = restaurant;
    return (
        <div className={restaurantContainer}>
            <img className={restaurantImage} src={photos[0]} />
            <div className={restaurantName}>{truncate(name, 35)}</div>
            <div className={starRating}>
                <Rating rating={rating} />
            </div>
            <div className={info}>
                {`${truncate(categories[0].title.toUpperCase(), 16)} • ${price || '??'}`}
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

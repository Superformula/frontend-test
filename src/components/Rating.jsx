import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import {
    ratingContainer,
    filledStarsContainer,
    emptyStarsContainer,
    emptyStar,
    starsContainer
} from './Rating.module.scss';

/*
The react-star-ratings module takes care of filling stars based on rating numbers, and can partially fill them etc.
However it doesn't have any way to make its "empty" stars just have a stroke around them - they can only be a solid color.
So we roll our own empty stars, swiping the svg path from the one react-star-ratings uses.
*/
const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <span className={emptyStar} key={i}>
                <svg viewBox="0 0 51 48" width="19" height="19">
                    <path
                        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                        stroke="#002b57"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
            </span>
        );
    }
    return (
        <div className={ratingContainer}>
            <div className={starsContainer}>
                <div className={filledStarsContainer}>
                    <StarRatings
                        rating={rating}
                        starDimension="20px"
                        starSpacing="1px"
                        starRatedColor="#002b57"
                        starEmptyColor="transparent"
                    />
                </div>
                <div className={emptyStarsContainer}>{stars}</div>
            </div>
        </div>
    );
};

Rating.propTypes = { rating: PropTypes.number };

export default Rating;

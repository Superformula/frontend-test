import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { row, column } from 'scss/layout.module.scss';
import {
    ratingContainer,
    locationDetails,
    locationDetailsImageRow,
    addressText,
    priceText,
    reviewCountText,
    openNowContainer
} from './RestaurantDetail.module.scss';
import { fetchReviews, fetchRestaurantDetails } from '../store/actions';
import Review from './Review';
import Header from './Header';
import Rating from './Rating';
import OpenNowIndicator from './OpenNow/OpenNowIndicator';

const Detail = ({
    restaurantDetails,
    fetchRestaurantDetails,
    restaurantDetailsLoading,
    fetchReviews,
    reviews,
    match
}) => {
    useEffect(() => {
        fetchRestaurantDetails(match.params.id);
        fetchReviews(match.params.id);
    }, []);

    const { name, rating, categories, price, hours, image_url, location, review_count } = restaurantDetails;
    return (
        <div>
            {restaurantDetailsLoading ? null : (
                <React.Fragment>
                    <Header headerTitle={name}>
                        <div className={ratingContainer}>
                            <Rating rating={rating} />
                        </div>
                        <div className={row}>
                            <div className={column}>
                                <div className={priceText}>{`${categories[0].title} • ${price}`}</div>
                            </div>
                            <div className={openNowContainer}>
                                <OpenNowIndicator size="large" openNow={hours[0].is_open_now} />
                            </div>
                        </div>
                    </Header>
                    <div className="divider" />
                    <div className={classNames(locationDetails, 'contentContainer')}>
                        <div className={classNames(row, locationDetailsImageRow)}>
                            <div className={column}>{/* map view */}</div>
                            <div className={column}>
                                <img src={image_url}></img>
                            </div>
                        </div>
                        <div
                            className={addressText}
                        >{`${location.address1} ${location.city}, ${location.state} ${location.zip_code}`}</div>
                    </div>
                    <div className="divider" />
                    <div className={'contentContainer'}>
                        <div className={reviewCountText}>{review_count} Reviews</div>
                        {reviews.map(review => {
                            return <Review review={review} key={review.id} />;
                        })}
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};

Detail.propTypes = {
    fetchReviews: PropTypes.func,
    reviews: PropTypes.array,
    fetchRestaurantDetails: PropTypes.func,
    restaurantDetailsLoading: PropTypes.bool,
    restaurantDetails: PropTypes.object,
    match: PropTypes.object
};
const mapStateToProps = state => ({
    restaurantDetails: state.restaurantDetails,
    restaurantDetailsLoading: state.restaurantDetailsLoading,
    reviews: state.reviews
});
export default connect(
    mapStateToProps,
    { fetchRestaurantDetails, fetchReviews }
)(Detail);

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchReviews, fetchRestaurantDetails } from '../store/actions';
import Review from './Review';

const Detail = ({ restaurantDetails, fetchRestaurantDetails, fetchReviews, reviews, match }) => {
    useEffect(() => {
        fetchRestaurantDetails(match.params.id);
        fetchReviews(match.params.id);
    }, []);
    return (
        <div>
            <div>Detail</div>
            {reviews.map(review => {
                return <Review review={review} key={review.id} />;
            })}
        </div>
    );
};

Detail.propTypes = {
    fetchReviews: PropTypes.func,
    reviews: PropTypes.array,
    fetchRestaurantDetails: PropTypes.func,
    restaurantDetails: PropTypes.object,
    match: PropTypes.object
};
const mapStateToProps = state => ({ restaurantDetails: state.restaurantDetails, reviews: state.reviews });
export default connect(
    mapStateToProps,
    { fetchRestaurantDetails, fetchReviews }
)(Detail);

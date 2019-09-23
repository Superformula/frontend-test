import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchReviews, fetchRestaurantDetails } from '../store/actions';
import Review from './Review';
import Header from './Header';

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
    return (
        <div>
            {restaurantDetailsLoading ? null : (
                <React.Fragment>
                    <Header headerTitle={restaurantDetails.name}>
                        {restaurantDetails.rating}
                        <br />
                        Open Now {restaurantDetails.hours[0].is_open_now.toString()}
                        <br />
                        {`${restaurantDetails.location.address1} ${restaurantDetails.location.city}, ${restaurantDetails.location.state} ${restaurantDetails.location.zip_code}`}
                    </Header>
                    {reviews.map(review => {
                        return <Review review={review} key={review.id} />;
                    })}
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

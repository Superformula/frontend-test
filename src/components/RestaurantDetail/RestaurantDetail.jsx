/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import ReactMapGL, { Marker } from 'react-map-gl';

import Loader from '../Loader/Loader';
import { row, column, contentContainer, divider } from 'scss/layout.module.scss';
import {
	ratingContainer,
	locationDetails,
	locationDetailsImageRow,
	addressText,
	priceText,
	reviewCountText,
	openNowContainer,
	detailsLoader
} from './RestaurantDetail.module.scss';
import { getReviews, getRestaurantDetails } from '../../store/actions';
import Review from '../Review/Review';
import Header from '../Header/Header';
import Rating from '../Rating/Rating';
import OpenNowIndicator from '../OpenNow/OpenNowIndicator';

export const RestaurantDetail = ({
	restaurantDetails,
	onGetRestaurantDetails,
	restaurantDetailsLoading,
	reviewsLoading,
	onGetReviews,
	reviews,
	match
}) => {
	useEffect(() => {
		onGetRestaurantDetails(match.params.id);
		onGetReviews(match.params.id);
	}, [onGetRestaurantDetails, onGetReviews, match]);

	const {
		name,
		rating,
		categories,
		price,
		hours,
		image_url,
		location,
		review_count,
		coordinates
	} = restaurantDetails;
	return (
		<div>
			{restaurantDetailsLoading || reviewsLoading ? (
				<Loader wrapperClassname={detailsLoader} />
			) : (
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
					<div className={divider} />
					<div className={classNames(locationDetails, contentContainer)}>
						<div className={classNames(row, locationDetailsImageRow)}>
							<div className={column}>
								<ReactMapGL
									width={640}
									height={228}
									latitude={coordinates.latitude}
									longitude={coordinates.longitude}
									zoom={16}
									mapboxApiAccessToken={
										'pk.eyJ1IjoiYnJlbmRhbmFkbmVyYiIsImEiOiJjazB5NnJ2bmswMDhvM2lxbjZpMXU3cWJ0In0.R59ggoHa_LX6F-OMsb4JPQ'
									}
								>
									<Marker
										latitude={coordinates.latitude}
										longitude={coordinates.longitude}
										offsetLeft={-20}
										offsetTop={-20}
									>
										<svg x="0px" y="0px" width="40px" height="40px" viewBox="0 0 512 512">
											<path
												d="M256,0C167.641,0,96,71.625,96,160c0,24.75,5.625,48.219,15.672,69.125C112.234,230.313,256,512,256,512l142.594-279.375
												C409.719,210.844,416,186.156,416,160C416,71.625,344.375,0,256,0z M256,256c-53.016,0-96-43-96-96s42.984-96,96-96
												c53,0,96,43,96,96S309,256,256,256z"
												stroke="#002b57"
												strokeWidth="2"
												fill="#002b57"
											/>
										</svg>
									</Marker>
								</ReactMapGL>
							</div>
							<div className={column}>
								<img src={image_url} />
							</div>
						</div>
						<div
							className={addressText}
						>{`${location.address1} ${location.city}, ${location.state} ${location.zip_code}`}</div>
					</div>
					<div className={divider} />
					<div className={contentContainer}>
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

RestaurantDetail.propTypes = {
	onGetReviews: PropTypes.func,
	reviews: PropTypes.array,
	onGetRestaurantDetails: PropTypes.func,
	restaurantDetailsLoading: PropTypes.bool,
	reviewsLoading: PropTypes.bool,
	restaurantDetails: PropTypes.object,
	match: PropTypes.object
};
const mapStateToProps = state => ({
	restaurantDetails: state.restaurantDetails,
	restaurantDetailsLoading: state.restaurantDetailsLoading,
	reviewsLoading: state.reviewsLoading,
	reviews: state.reviews
});
export default connect(
	mapStateToProps,
	{ onGetRestaurantDetails: getRestaurantDetails, onGetReviews: getReviews }
)(RestaurantDetail);

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Rating from '../Rating/Rating';
import { row, column } from 'scss/layout.module.scss';
import {
	reviewRow,
	userImage,
	userColumn,
	reviewColumn,
	userImageColumn,
	userInfoColumn,
	ratingContainer,
	reviewText
} from './Review.module.scss';
const Review = ({ review }) => {
	const { rating, text, time_created, user } = review;
	return (
		<div className={classNames(row, reviewRow)}>
			<div className={classNames(column, userColumn)}>
				<div className={row}>
					<div className={classNames(column, userImageColumn)}>
						<img src={user.image_url} className={userImage} />
					</div>
					<div className={classNames(column, userInfoColumn)}>
						<div>{user.name}</div>
						<div>{time_created.substr(0, time_created.indexOf(' '))}</div>
					</div>
				</div>
			</div>
			<div className={classNames(column, reviewColumn)}>
				<div className={ratingContainer}>
					<Rating rating={rating}></Rating>
				</div>
				<div className={reviewText}>{text}</div>
			</div>
		</div>
	);
};
Review.propTypes = {
	review: PropTypes.object
};
export default Review;

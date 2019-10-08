import React from 'react';
import PropTypes from 'prop-types';

import './ReviewWrapper.scss';

import Heading from '../Heading/Heading';
import Image from '../Image/Image';
import Paragraph from '../Paragraph/Paragraph';
import Rating from '../Rating/Rating';
import Spacer from '../Spacer/Spacer';

const ReviewWrapper = (props) => {
  const { rating, reviewText, reviewDate, reviewerName, userImage } = props;

  return (
    <div className="review-wrapper">
        {/* User profile image */}
        <Image source={userImage} small /> 

      <div className="review-user-details-container">
        {/* User name & date of review */}
        <Heading level={3}>{reviewerName}</Heading>
        <Heading level={5} light>{reviewDate}</Heading>
      </div>

      <div className="review-details-container">
        {/* Rating for the review */}
        <Rating rating={rating} />
        <Spacer size="large" />

        {/* The review */}
        <Paragraph>{reviewText}</Paragraph>
      </div>

    </div>
  );
}

ReviewWrapper.propTypes = {
  rating: PropTypes.number, 
  reviewText: PropTypes.string, 
  reviewDate: PropTypes.string, 
  reviewerName: PropTypes.string, 
  userImage: PropTypes.string
}

export default ReviewWrapper;
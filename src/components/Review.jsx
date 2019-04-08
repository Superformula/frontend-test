import StarRating from 'Components/StarRating';
import moment from 'moment';
import React from 'react';

const Review = ({review}) => {
    return <div className='review'>
        <img alt={review.user.name} src={review.user.image_url}/>
        <div className='details'>
            <div className='name'>{review.user.name}</div>
            <div className='date'>{moment(review.time_created).format('L')}</div>
        </div>
        <div className='rating'>
            <StarRating rating={review.rating}/>
        </div>
        <div className='text'>{review.text}</div>
    </div>;
};

export default Review;

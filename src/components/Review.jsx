import React from 'react';
import classNames from 'classnames';

const Review = ({ review }) => {
    const { rating, text, time_created, user } = review;
    return (
        <div>
            <div>Review</div>
            <div>{time_created}</div>
            <div>{rating}</div>
            <div>{text}</div>
            <div>{user.name}</div>
            <img src={user.image_url} />
        </div>
    );
};
export default Review;

import StarRating from 'Components/StarRating';
import moment from 'moment';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const Review = ({review}) => {
    return <div key={review.id} className='review'>
        <div className='info'>
            <img alt={review.user.name} src={review.user.image_url}/>
            <div className='details'>
                <ResponsiveEllipsis className='name' text={review.user.name} maxLine={2} trimRight basedOn='letters'/>
                <div className='date'>{moment(review.time_created).format('l')}</div>
            </div>
        </div>
        <div className='content'>
            <div className='rating'>
                <StarRating keyPrefix={review.id} rating={review.rating}/>
            </div>
            <div className='text'>{review.text}</div>
        </div>
        <div className='hr'/>
    </div>;
};

export default Review;

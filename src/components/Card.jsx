import StarRating from 'Components/StarRating';
import React from 'react';

const Card = (props) => {
    const {
        imgSrc,
        name,
        rating,
    } = props;

    return (
        <div className='card'>
            <img className='image' src={imgSrc} alt={name}/>
            <div className='details'>
                <div className='name'>{name}</div>
                <StarRating rating={rating}/>
            </div>
        </div>
    );
};

export default Card;

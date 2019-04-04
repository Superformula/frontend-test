import StarRating from 'Components/StarRating';
import React from 'react';

const Card = (props) => {
    const {
        imgSrc,
        name,
        rating,
        category,
        price,
        isOpen,
    } = props;

    return (
        <div className='card'>
            <img className='image' src={imgSrc} alt={name}/>
            <div className='details'>
                <div className='name'>{name}</div>
                <StarRating rating={rating}/>
                <div className='info'>
                    <div className='category' style={{overflow: 'ellipsis'}}>{category}</div>
                    <div className='separator'>•</div>
                    <div className='price'>{price}</div>
                    {isOpen
                        ? <div className='status open'>OPEN</div>
                        : <div className='status closed'>CLOSED</div>
                    }
                </div>
                <div className='button'>
                    <a href='/' className='text'>Learn More <span className='arrow'>→</span></a>
                </div>
            </div>
        </div>
    );
};

export default Card;

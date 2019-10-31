import * as React from 'react';
import { Rating } from './Rating';

export function RestaurantResult({ business, showDetails }) {
    return (<div className='restaurant'>
        <div className='restaurant-image'><img src={business.image_url} /></div>
        <div className='restaurant-name'>{business.name}</div>
        <Rating rating={business.rating} />
        <div className='restaurant-info'>
            <div className='restaurant-category'>
                {business.categories[0].title} &bull; {business.price}
            </div>
            {business.is_closed && <div className='closed'>Closed</div>}
            {!business.is_closed && <div className='open'>Open Now</div>}
        </div>
        <button className='learn-more' onClick={showDetails}>Learn More</button>
    </div>)
}

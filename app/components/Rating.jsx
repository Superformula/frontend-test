import * as React from 'react';

export function Rating({ rating }) {
    const isHalf = (rating | 0) !== rating;
    const path = `/yelp_stars/small_${rating | 0}${isHalf ? '_half' : ''}.png`;
    return (<img className='rating' src={path} />);
}

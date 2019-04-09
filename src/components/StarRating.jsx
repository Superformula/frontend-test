import {range} from 'lodash';
import React from 'react';

const star = (key, percentage = 0) => {
    const gradientId = `starGradient-${key}`;
    const primaryColor = '#002b57';
    return (
        <svg key={key} className='star' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 20 20'>
            <defs>
                <linearGradient id={gradientId} x1='0' x2='1' y1='.5' y2='.5'>
                    <stop offset='0%' stopOpacity='1' stopColor={primaryColor}/>
                    <stop offset={`${percentage}%`} stopOpacity='1' stopColor={primaryColor}/>
                    <stop offset={`${percentage}%`} stopOpacity='0'/>
                    <stop offset='100%' stopOpacity='0'/>
                </linearGradient>
            </defs>
            <g stroke='#002B56' fill={`url('#${gradientId}')`}>
                <path d='M10 1.6L7.6 8 1.7 8 6.7 11.8 4.4 18 10 13.8 15.6 18 13.3 11.8 18.3 8 12.4 8 10 1.6Z'/>
            </g>
        </svg>
    );
};

const StarRating = ({keyPrefix, rating, max = 5}) => {
    if (rating > max) {
        rating = max;
    } else if (rating < 0) {
        rating = 0;
    }
    const filled = Math.floor(rating);
    const isInteger = rating === filled;

    const percent = isInteger ? 0 : Math.round((rating - filled) * 100);
    const buildKey = k => `${keyPrefix}:${k}`;
    return (
        <div className='star-rating'>
            {range(filled).map(k => star(buildKey(k), 100))}
            {percent > 0 ? star(buildKey(filled), percent) : ''}
            {range(filled + 1, max + (isInteger ? 1 : 0)).map(k => star(buildKey(k)))}
        </div>
    );
};

export default StarRating;

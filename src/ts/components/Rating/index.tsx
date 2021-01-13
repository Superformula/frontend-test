// Imports
// -------

// Libraries
import React from 'react';
// Images
import emptyStar from '../../../img/emptyStar.svg';
import halfStar from '../../../img/halfStar.svg';
import fullStar from '../../../img/fullStar.svg';
// Styles
import style from './style.module.css';

// Internal
// --------

export interface RatingProps {
    value: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
    size?: 'small' | 'large'
}

const Rating: React.FC<RatingProps> = ({value, size = 'small'}) => {
    const getStar = (imgSrc: string, idx: number) => (
        <img src={ imgSrc } alt={ imgSrc } key={ idx } className={ style[size] }/>
    );

    //
    // Render

    const numFullStars = Math.floor(value);
    const numHalfStars = value - numFullStars === 0.5 ? 1 : 0;
    const numEmptyStars = Math.floor(5 - value);

    return (
        <div>
            { Array.from({length: numFullStars}).map((_, idx) => getStar(fullStar, idx)) }
            { Array.from({length: numHalfStars}).map((_, idx) => getStar(halfStar, idx)) }
            { Array.from({length: numEmptyStars}).map((_, idx) => getStar(emptyStar, idx)) }
        </div>
    );
}

// Exports
// -------

export default Rating;

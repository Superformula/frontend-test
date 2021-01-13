// Imports
// -------

// Libraries
import React from 'react';
// Components
import Button from "../Button";
import Rating from '../Rating';
import OpenStatus from "../OpenStatus";
// Styles
import style from './style.module.css';

// Internal
// --------

export interface CardProps {
    id: string,
    imgSrc: string,
    title: string,
    rating: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
    category: string,
    price: 1 | 2 | 3 | 4,
    status: 'open' | 'closed',
    onClick?(): any
}

const Card: React.FC<CardProps> = ({id, imgSrc, title, rating, category, price, status, onClick = () => {}}) => {
    //
    // Render

    return (
        <div className={ style.card }>
            <div>
                <img src={ imgSrc } alt={ `${title} image` } className={ style.image }/>
            </div>
            <div style={{flexGrow: 1}}>
                <div className={ style.title }>
                    <h3>{ title }</h3>
                </div>
                <div className={ style.rating }>
                    <Rating value={ rating } />
                </div>
                <div className={ style.category }>
                    { `${category} • ${ '$'.repeat(price) }` }
                    <OpenStatus isOpen={ status === 'open' }/>
                </div>
            </div>
            <div className={ style.learnMoreButton }>
                <Button text="Learn More" size='full'/>
            </div>
        </div>
    );
}

// Exports
// -------

export default Card;

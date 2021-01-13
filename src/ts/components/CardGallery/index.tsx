// Imports
// -------

// Libraries
import React from 'react';
// Components
import Card  from '../Card';
// Styles
import style from './style.module.css';

// Internal
// --------

export interface CardGalleryProps {
    data: object[]
}

const CardGallery: React.FC<CardGalleryProps> = ({data}) => {
    //
    // Render

    const getCardItems = (cardSpec: any, idx: number) => (
        <div key={idx} className={ style.cardGalleryItem } >
            <Card {...cardSpec} />
        </div>
    )

    return (
        <div className={ style.cardGallery }>
            { data.map(getCardItems) }
        </div>
    );
}

// Exports
// -------

export default CardGallery;

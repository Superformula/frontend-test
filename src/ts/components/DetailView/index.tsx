// Imports
// -------

// Libraries
import React from 'react';
// Components
import Hero from '../Hero';

// Internal
// --------

export interface DetailViewProps {
}

const DetailView: React.FC<DetailViewProps> = ({}) => {
    //
    // Render

    return (
        <div>
            <Hero title="Restaurants"/>
        </div>
    );
}

// Exports
// -------

export default DetailView;

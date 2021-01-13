// Imports
// -------

// Libraries
import React from 'react';
// Strings
import strings from "./strings";

// Internal
// --------

export interface HeroProps {
    title: string,
    description?: string
}

const Hero = ({title, description = strings.defaultProps.description}: HeroProps) => {
    //
    // Render

    return (
        <div>
            <h1>{ title }</h1>
            <p>{ description }</p>
        </div>
    );
}

// Exports
// -------

export default Hero;

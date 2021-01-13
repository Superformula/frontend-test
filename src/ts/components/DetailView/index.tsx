// Imports
// -------

// Libraries
import React from 'react';
// Components
import Hero from '../Hero';

// Internal
// --------

export interface AppProps {
}

const App = ({}: AppProps) => {
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

export default App;

// Imports
// -------

// Libraries
import React from 'react';
// Components
import MainView from '../MainView';
// Style
import style from './style.module.css';
// Temp
import { ApolloProvider } from "@apollo/client";
import yelpClient from "../../graphql/yelp/client";

// Internal
// --------

export interface AppProps {
}

const App: React.FC<AppProps> = ({}) => {
    //
    // Render

    return (
        <ApolloProvider client={ yelpClient }>
            <div className={ style.app }>
                <MainView/>
            </div>
        </ApolloProvider>
    );
}

// Exports
// -------

export default App;

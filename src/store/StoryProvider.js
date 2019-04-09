import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from 'testStore';
import testStore from '../../tests/data/testStore';

export default function StoryProvider({story, initialState = testStore}) {
    const store = configureStore(initialState);
    return (
        <ReduxProvider store={store}>
            <BrowserRouter>
                {story}
            </BrowserRouter>
        </ReduxProvider>
    );
};

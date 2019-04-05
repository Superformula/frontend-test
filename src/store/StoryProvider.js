import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from 'Store';



export default function StoryProvider({story, initialState}) {
    const store = configureStore(initialState);
    return (
        <ReduxProvider store={store}>
            {story}
        </ReduxProvider>
    );
};

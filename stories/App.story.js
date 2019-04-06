import {storiesOf} from '@storybook/react';
import App from 'Components/App';
import {fromJS} from 'immutable';
import React from 'react';
import StoryProvider from 'Store/StoryProvider';

storiesOf('App', module)
    .addDecorator(story => <StoryProvider
        story={story()}
        initialState={{
            'BUSINESSES': fromJS([
                {
                    id: 1,
                    name: 'Test Rest One',
                    rating: 4,
                    is_closed: false,
                },
                {
                    id: 2,
                    name: 'Test Rest Two',
                    rating: 5,
                    is_closed: false,
                },
                {
                    id: 3,
                    name: 'Test Rest Two',
                    rating: 5,
                },
                {
                    id: 4,
                    name: 'Test Rest Two',
                    rating: 5,
                },
            ]),
        }}
    />)
    .add('with fake data', () => <App/>)
;

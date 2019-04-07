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
                    name: 'Very Long Name Restaurants Number 1 In List',
                    rating: 4,
                    price: '$$',
                    is_closed: false,
                    photos: ['https://placeholder.pics/svg/300/FFD814-FF6D3B/Food'],
                    categories: [{title: 'thai'}],
                },
                {
                    id: 2,
                    name: 'Test Rest Two',
                    rating: 5,
                    price: '$$$$',
                    photos: ['https://placeholder.pics/svg/300/FFD814-FF6D3B/Food'],
                    is_closed: false,
                    categories: [{title: 'seafood'}],
                },
                {
                    id: 3,
                    name: 'Test Rest Two',
                    price: '$$$',
                    photos: ['https://placeholder.pics/svg/300/FFD814-FF6D3B/Food'],
                    rating: 5,
                    categories: [{title: 'japanese'}],
                },
                {
                    id: 4,
                    name: 'Test Rest Two',
                    price: '$$$$',
                    photos: ['https://placeholder.pics/svg/300/FFD814-FF6D3B/Food'],
                    rating: 5,
                    categories: [{title: 'italian'}],
                },
            ]),
        }}
    />)
    .add('with fake data', () => <App/>)
;

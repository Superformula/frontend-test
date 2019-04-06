import {storiesOf} from '@storybook/react';
import Card from 'Components/Card';
import {fromJS} from 'immutable';
import React from 'react';
import StoryProvider from 'Store/StoryProvider';

storiesOf('Components/Card', module)
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
    .add('Simple', () => <Card
        name="Julian's Bakery"
        imgSrc='https://via.placeholder.com/300'
        rating={4.25}
        isOpen={true}
        category={'American'}
        price={'$$'}
    />)
;

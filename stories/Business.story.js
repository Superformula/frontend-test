import {storiesOf} from '@storybook/react';
import Business from 'Components/Business';
import React from 'react';
import StoryProvider from 'Store/StoryProvider';

storiesOf('Components/Business', module)
    .addDecorator(story => <StoryProvider story={story()}/>)
    .add('Simple', () => <Business place={{
        name: 'Julian\'s Bakery',
        id: 1234,
        photos: ['https://via.placeholder.com/300'],
        rating: 4.35,
        price: '$$',
        categories: [{title: 'American'}],
        hours: [{is_open_now: true}],
    }}/>)
;

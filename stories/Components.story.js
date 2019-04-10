import {storiesOf} from '@storybook/react';
import Business from 'Components/Business';
import Filter from 'Components/Filter';
import Map from 'Components/Map';
import Review from 'Components/Review';
import {REDUX_KEYS} from 'Constants';
import React from 'react';
import StoryProvider from 'Store/StoryProvider';
import testStore from '../tests/data/testStore';

storiesOf('Components', module)
    .addDecorator(story => <StoryProvider story={story()}/>)
    .add('Filter', () => <Filter ready={true}/>)
    .add('Business', () => <Business place={{
        name: 'Julian\'s Bakery',
        id: 1234,
        photos: ['https://via.placeholder.com/300'],
        rating: 4.35,
        price: '$$',
        categories: [{title: 'American'}],
        hours: [{is_open_now: true}],
    }}/>)
    .add('Map', () => <Map/>)
    .add('Review', () => <Review review={testStore[REDUX_KEYS.REVIEWS].toJS().reviews[0]}/>)
;

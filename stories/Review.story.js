import {storiesOf} from '@storybook/react';
import Review from 'Components/Review';
import {REDUX_KEYS} from 'Constants';
import React from 'react';
import StoryProvider from 'Store/StoryProvider';
import testStore from '../tests/data/testStore';

storiesOf('Components/Review', module)
    .addDecorator(story => <StoryProvider story={story()}/>)
    .add('basic', () => <Review review={testStore[REDUX_KEYS.REVIEWS].toJS().reviews[0]}/>)
;

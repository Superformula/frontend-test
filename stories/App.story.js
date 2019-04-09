import {storiesOf} from '@storybook/react';
import Router from 'Components/Router';
import React from 'react';
import StoryProvider from 'Store/StoryProvider';

storiesOf('Routes/Main', module)
    .addDecorator(story => <StoryProvider story={story()}/>)
    .add('with fake data', () => <Router/>);

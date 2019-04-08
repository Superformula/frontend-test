import {storiesOf} from '@storybook/react';
import Map from 'Components/Map';
import React from 'react';
import StoryProvider from 'Store/StoryProvider';

storiesOf('Components/Map', module)
    .addDecorator(story => <StoryProvider story={story()}/>)
    .add('with fake data', () => <Map/>)
;

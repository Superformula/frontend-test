import {storiesOf} from '@storybook/react';
import Filter from 'Components/Filter';
import React from 'react';
import StoryProvider from 'Store/StoryProvider';

storiesOf('Components/Filter', module)
    .addDecorator(story => <StoryProvider story={story()}/>)
    .add('Closed', () => <Filter ready={true}/>)
    .add('Open', () => <Filter startOpen ready={true}/>)
;

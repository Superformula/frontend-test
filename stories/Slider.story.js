import {storiesOf} from '@storybook/react';
import Switch from 'Components/Switch';
import React from 'react';
import StoryProvider from 'Store/StoryProvider';

storiesOf('Components/Switch', module)
    .addDecorator(story => <StoryProvider story={story()}/>)
    .add('Starting Off', () => <Switch/>)
    .add('Starting On', () => <Switch on/>)
;

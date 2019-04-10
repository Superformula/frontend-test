import {storiesOf} from '@storybook/react';
import Detail from 'Components/routes/Detail';
import Router from 'Components/routes/Router';
import React from 'react';
import StoryProvider from 'Store/StoryProvider';

storiesOf('Routes', module)
    .addDecorator(story => <StoryProvider story={story()}/>)
    .add('Grid', () => <Router/>)
    .add('Detail', () => <Detail match={{params: {id: 'OJ3mj9U3TygEfmkR5hBgvQ'}}}/>)
;

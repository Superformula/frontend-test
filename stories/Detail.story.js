import {storiesOf} from '@storybook/react';
import Detail from 'Components/Business/Detail';
import React from 'react';
import StoryProvider from 'Store/StoryProvider';

storiesOf('Routes/Detail', module)
    .addDecorator(story => <StoryProvider story={story()}/>)
    .add('with fake data', () => <Detail match={{params: {id: 'OJ3mj9U3TygEfmkR5hBgvQ'}}}/>);

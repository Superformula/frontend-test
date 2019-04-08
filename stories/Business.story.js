import {storiesOf} from '@storybook/react';
import Business from 'Components/Business';
import React from 'react';
import StoryProvider from 'Store/StoryProvider';

storiesOf('Components/Business', module)
    .addDecorator(story => <StoryProvider story={story()}/>)
    .add('Simple', () => <Business
        name="Julian's Bakery"
        imgSrc='https://via.placeholder.com/300'
        rating={4.25}
        isOpen={true}
        category={'American'}
        price={'$$'}
    />)
;

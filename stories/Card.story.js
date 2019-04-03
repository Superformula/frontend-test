import {storiesOf} from '@storybook/react';
import Card from 'Components/Card';
import React from 'react';

storiesOf('Components/Card')
    .add('0/5 Stars', () => <Card name="Julian's Bakery" rating={4.75}/>)
;

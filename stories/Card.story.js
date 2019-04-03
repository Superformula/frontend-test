import {storiesOf} from '@storybook/react';
import Card from 'Components/Card';
import React from 'react';

storiesOf('Components/Card')
    .add('Simple', () => <Card name="Julian's Bakery" imgSrc='https://via.placeholder.com/300' rating={4.75}/>)
;

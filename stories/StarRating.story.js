import {storiesOf} from '@storybook/react';
import StarRating from 'Components/StarRating';
import React from 'react';

storiesOf('Components/StarRating', module)
    .add('< 0 Stars (Negative)', () => <StarRating rating={-1}/>)
    .add('0/5 Stars', () => <StarRating rating={0}/>)
    .add('1/5 Stars', () => <StarRating rating={1}/>)
    .add('1.5/5 Stars', () => <StarRating rating={1.5}/>)
    .add('2/5 Stars', () => <StarRating rating={2}/>)
    .add('4/5 Stars', () => <StarRating rating={4}/>)
    .add('4.8/5 Stars', () => <StarRating rating={4.8}/>)
    .add('5/5 Stars', () => <StarRating rating={5}/>)
    .add('5/10 Stars', () => <StarRating rating={5} max={10}/>)
    .add('2.345/10 Stars', () => <StarRating rating={2.345} max={10}/>)
    .add('> Max Stars (11/10)', () => <StarRating rating={11} max={10}/>)
;

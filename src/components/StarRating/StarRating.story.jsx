import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  StarRating,
  GridItem,
  Heading,
  SubHeading,
} from '..';

storiesOf('StarRating', module)
  .add('Ratings', () => (
    <GridItem p={2}>
      <Heading>Star Ratings</Heading>
      <SubHeading>3.5 star rating</SubHeading>
      <StarRating rating={3.5} />
      <SubHeading mt={2}>5 star rating</SubHeading>
      <StarRating rating={5} />
      <SubHeading mt={1}>0 star rating</SubHeading>
      <StarRating rating={0} />
      <SubHeading mt={1}>9 out of 10 star rating</SubHeading>
      <StarRating rating={9} count={10} />
    </GridItem>
  ));

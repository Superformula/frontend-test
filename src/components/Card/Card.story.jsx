import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Card,
  GridItem,
  Heading,
} from '..';

storiesOf('Card', module)
  .add('Styles', () => (
    <GridItem p={2}>
      <Heading>Card component</Heading>
      <p>Use the buttonVariant property to specify a different button style.</p>
      <GridItem display="flex" flexWrap="wrap">
        <Card
          imageSrc="https://placekitten.com/1000/666"
          title="Are you kitten me?"
          rating={4.5}
          price="$$$$"
          closed={false}
          onClick={() => {}}
        />
        <Card
          imageSrc="https://placekitten.com/1000/666"
          title="Is this fur real?"
          rating={1.5}
          price="$$"
          closed
          buttonVariant="secondary"
        />
      </GridItem>
    </GridItem>
  ));

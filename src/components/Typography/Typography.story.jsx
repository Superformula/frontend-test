import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Headline,
  Heading,
  SubHeading,
  Lead,
  Small,
  GridItem,
} from '..';

storiesOf('Typography', module)
  .add('Headings', () => (
    <GridItem px={3}>
      <Headline color="black80" pb={3}>I am a headline.</Headline>
      <Heading color="black80" pb={3}>
        I am a heading. Use me to define and separate concepts and sections on the page.
      </Heading>
      <SubHeading pb={3}>
        I am a subheading. Use me to identify specific items on the page.
      </SubHeading>
    </GridItem>
  ))
  .add('Other', () => (
    <GridItem px={3}>
      <Lead py={3} color="black60">
        I am a lead. Use me to introduce a page and draw the user into the content.
      </Lead>
      <Small pb={3}>
        I am a small tag. Use me to represent side-comments and small print.
      </Small>
    </GridItem>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Button,
  GridItem,
  Heading,
  SubHeading,
} from '..';

storiesOf('Button', module)
  .add('default', () => (
    <GridItem p={2}>
      <Heading>Default Button</Heading>
      <SubHeading>Large</SubHeading>
      <GridItem py={2}>
        <Button variant="primary">Default</Button>
      </GridItem>
      <GridItem py={2}>
        <Button variant="primary" disabled>Disabled</Button>
      </GridItem>
      <GridItem py={2}>
        <Button variant="primary" block>Block</Button>
      </GridItem>
      <GridItem py={2}>
        <SubHeading>Small</SubHeading>
        <Button variant="primary" small>Default</Button>
      </GridItem>
      <GridItem py={2}>
        <Button variant="primary" small disabled>Disabled</Button>
      </GridItem>
      <GridItem py={2}>
        <Button variant="primary" small block>Block</Button>
      </GridItem>
    </GridItem>
  ))
  .add('secondary', () => (
    <GridItem p={2}>
      <Heading>Secondary Button</Heading>
      <SubHeading>Large</SubHeading>
      <GridItem py={2}>
        <Button variant="secondary">Secondary</Button>
      </GridItem>
      <GridItem py={2}>
        <Button variant="secondary" disabled>Disabled</Button>
      </GridItem>
      <GridItem py={2}>
        <Button variant="secondary" block>Block</Button>
      </GridItem>
      <GridItem py={2}>
        <SubHeading>Small</SubHeading>
        <Button variant="secondary" small>Secondary</Button>
      </GridItem>
      <GridItem py={2}>
        <Button variant="secondary" small disabled>Disabled</Button>
      </GridItem>
      <GridItem py={2}>
        <Button variant="secondary" small block>Block</Button>
      </GridItem>
    </GridItem>
  ));

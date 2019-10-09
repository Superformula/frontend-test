import React from "react";

import Heading from "./Heading";
import { storiesOf } from '@storybook/react';
import notes from './Heading.md';


storiesOf('Heading', module).add("A Heading", () => 
  <div>
    <Heading level={1} style="light">
      This is a 'light' heading.
    </Heading>
    <Heading level={2}>This is a heading.</Heading>
    <Heading level={3}>This is a heading.</Heading>
    <Heading level={4}>This is a heading.</Heading>
    <Heading level={5}>This is a heading.</Heading>
    <Heading level={6}>This is a heading.</Heading>
  </div>,
  {notes: {notes}}
);

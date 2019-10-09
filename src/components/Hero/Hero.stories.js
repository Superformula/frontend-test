import React from "react";

import Hero from "./Hero";
import MetadataWrapper from "../MetadataWrapper/MetadataWrapper";
import { storiesOf } from '@storybook/react';
import notes from './Hero.md';

export default {
  component: Hero,
  title: "Hero"
};

const subtext =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const metadata = (
  <MetadataWrapper category="thai" price="$$$" status={true} large />
);

storiesOf('Hero', module)
  .add("Plain", () => <Hero>Restaurants</Hero>, {notes:{ notes }})
  .add("With Subtext", () => <Hero subtext={subtext}>Restaurants</Hero>, {notes:{ notes }})
  .add("With Component", ()  => <Hero subcomponent={metadata}>Restaurants</Hero>, {notes:{ notes }})
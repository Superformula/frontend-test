import React from "react";

import Hero from "./Hero";
import MetadataWrapper from "../MetadataWrapper/MetadataWrapper";

export default {
  component: Hero,
  title: "Hero"
};

const subtext =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const metadata = (
  <MetadataWrapper category="thai" price="$$$" status={true} large />
);

export const plain = () => <Hero>Restaurants</Hero>;

export const withSubtext = () => <Hero subtext={subtext}>Restaurants</Hero>;

export const withSubcomponent = () => (
  <Hero subcomponent={metadata}>Restaurants</Hero>
);

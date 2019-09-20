import React from 'react';

import Hero from './Hero';
import Divider from '../Divider/Divider';

export default { 
  component: Hero,
  title: 'Hero' 
};

const subtext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

export const plain = () => ( 
  <Hero>Restaurants</Hero>
);

export const withSubtext = () => (
  <Hero subtext={subtext}>Restaurants</Hero>
);

export const withSubcomponent = () => (
  <Hero subcomponent={<Divider/>}>Restaurants</Hero>
);

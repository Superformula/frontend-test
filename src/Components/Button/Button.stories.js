import React from 'react';

import Button from './Button';

export default { 
  component: Button,
  title: 'Button' 
};

const size = ['wide'];
const color = ['inverted']

export const regular = () => ( 
  <Button>Learn More</Button> 
);

export const inverted = () => ( 
  <Button color={color}>Learn More</Button> 
);

export const wide = () => ( 
  <Button size={size}>Load More</Button> 
);
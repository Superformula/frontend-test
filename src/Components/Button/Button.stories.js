import React from 'react';

import Button from './Button';

export default { 
  component: Button,
  title: 'Button' 
};

const size = ['large'];

export const withTextRegular = () => ( 
  <Button>Learn More</Button> 
);

export const withTextLarge = () => ( 
  <Button size={size}>Load More</Button> 
);


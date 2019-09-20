import React from 'react';

import Divider from './Divider';

export default { 
  component: Divider,
  title: 'Divider' 
};

export const divider = () => ( 
  <div>
    <div style={{padding: '25px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

    <Divider />

    <div style={{padding: '25px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
  </div>
);

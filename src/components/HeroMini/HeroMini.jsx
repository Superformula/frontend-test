import React, { Fragment } from 'react';

import { Headline, Lead } from '..';

const placeholderText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

// TODO: Pull the headline prop from a prop on the react-router route
export default () => (
  <Fragment>
    <Headline mt={4} mb={1}>Restaurants</Headline>
    <Lead mt={3} mb={4} color="black60" width={[1, 3 / 4, 1 / 2]}>
      {placeholderText}
    </Lead>
  </Fragment>
);

import React from 'react';

import FlexWrapper from './FlexWrapper';

export default { 
  component: FlexWrapper,
  title: 'FlexWrapper' 
};

export const desktop = () => ( 
  <FlexWrapper>
    <div>Here is some Text</div>
  </FlexWrapper> 
);

export const mobile = () => ( 
  <FlexWrapper>
    <div>
      Here is some more test, but on mobile.
    </div>
  </FlexWrapper> 
);

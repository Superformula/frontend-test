import React from 'react';

import SectionWrapper from './SectionWrapper';

export default { 
  component: SectionWrapper,
  title: 'SectionWrapper' 
};

export const desktop = () => ( 
  <SectionWrapper>
    <div>Here is some Text</div>
  </SectionWrapper> 
);

export const mobile = () => ( 
  <SectionWrapper>
    <div>
      Here is some more test, but on mobile.
    </div>
  </SectionWrapper> 
);

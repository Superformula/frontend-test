import React from 'react';

import SectionWrapper from './SectionWrapper';

export default { 
  component: SectionWrapper,
  title: 'SectionWrapper' 
};

export const isDefault = () => ( 
  <SectionWrapper>
    Here is some text.
  </SectionWrapper> 
);

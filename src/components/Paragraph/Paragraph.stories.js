import React from 'react';

import Paragraph from './Paragraph';

export default { 
  component: Paragraph,
  title: 'Paragraph' 
};

export const bodyText = () => ( 
  <Paragraph>
    Don't be fooled by the French name, this place oozes with Californian flair. 
    Their space is phenomenal: bright, warm colors yet clean and inviting. 
    I've been twice for brunch and both times have been incredible! On our next trip to LA, 
    I should really check out dinner since they seem to do more classic French preparations at that time.
  </Paragraph> 
);

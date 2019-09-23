import React from 'react';

import Spacer from './Spacer';

export default { 
  component: Spacer,
  title: 'Spacer' 
};

const paragraphOne = "Don't be fooled by the French name, this place oozes with Californian flair. "
const paragraphTwo = "Their space is phenomenal: bright, warm colors yet clean and inviting."

export const small = () => ( 
  <div>
    <p> { paragraphOne }</p>
    <Spacer size="small"/>
    <p> { paragraphTwo }</p>
  </div>
);

export const medium = () => ( 
  <div>
    <p> { paragraphOne }</p>
    <Spacer size="medium"/>
    <p> { paragraphTwo }</p>
  </div>
);

export const large = () => ( 
  <div>
    <p> { paragraphOne }</p>
    <Spacer size="large"/>
    <p> { paragraphTwo }</p>
  </div>
);

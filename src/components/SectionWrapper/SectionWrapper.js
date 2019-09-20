import React from 'react';
import './SectionWrapper.scss';

function SectionWrapper(props) {
  return (
  <div className='section-wrapper'>
    {props.children}
  </div>
)};

export default SectionWrapper;
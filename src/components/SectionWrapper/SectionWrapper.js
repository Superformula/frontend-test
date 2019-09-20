import React from 'react';
import './SectionWrapper.scss';

function SectionWrapper(props) {
  return (
  <section className='section-wrapper'>
    {props.children}
  </section>
)};

export default SectionWrapper;
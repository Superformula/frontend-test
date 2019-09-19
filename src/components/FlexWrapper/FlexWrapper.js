import React from 'react';
import './FlexWrapper.scss';

function FlexWrapper(props) {
  return (
  <div className='flex'>
    {props.children}
  </div>
)};

export default FlexWrapper;
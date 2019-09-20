import React from 'react';

import './Paragraph.scss'

function Paragraph(props) {
  return (
    <p className='paragraph'>
      {props.children}
    </p>
  );
}

export default Paragraph;
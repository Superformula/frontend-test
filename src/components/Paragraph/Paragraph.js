import React from 'react';

import './Paragraph.scss'
import { PropTypes } from 'mobx-react';

function Paragraph(props) {
  return (
    <p className='paragraph'>
      {props.children}
    </p>
  );
}

Paragraph.propTypes = {
  children: PropTypes.object
}

export default Paragraph;
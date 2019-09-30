import React from 'react';
import classNames from 'classnames';

import './Image.scss';

const Image = (props) => {
  const { source, small } = props;

  const classes = classNames({
    'image-container': true,
    'small': small
  })
  return (
    <div className={classes}>
      <img src={source} className='image' />
    </div>
  );

}

export default Image;
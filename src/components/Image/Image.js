import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import placeholder from '../../assets/images/yelp-logo.png';

import './Image.scss';

const Image = (props) => {
  const { alt, small, source } = props;

  const classes = classNames({
    'image-container': true,
    'small': small
  })

  return (
    <div className={classes}>
      <img src={source ? source : placeholder} className='image' alt={alt || 'Image from Yelp'}/>
    </div>
  );

}

Image.propTypes = {
  alt: PropTypes.string,
  small: PropTypes.bool,
  source: PropTypes.string
}

export default Image;
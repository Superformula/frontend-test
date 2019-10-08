import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import placeholder from '../../assets/images/yelp-logo.png';

import './Image.scss';

const Image = (props) => {
  const { alt, small, source } = props;

  const classes = classNames({
    'image': true,
    'small': small
  })

  return (
    <img src={source ? source : placeholder} className={classes} alt={alt || 'Image from Yelp'}/>
  );

}

Image.propTypes = {
  alt: PropTypes.string,
  small: PropTypes.bool,
  source: PropTypes.string
}

export default Image;
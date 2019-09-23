import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Spacer.scss';

const Spacer = (props) => {

  const { size } = props;

  return(
    <span className={classNames('spacer', size)} />
  );
}

Spacer.propTypes = {
  size: PropTypes.string.isRequired,
}

export default Spacer;
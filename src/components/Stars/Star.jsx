import React from 'react';
import { number } from 'prop-types';
import cx from 'classnames';

export const Star = ({ score }) => (
  <figure
    className={cx('star', {
      'star--filled': score > 0.5,
      'star--half': score === 0.5,
      'star--empty': score < 0.5,
    })}
  />
);

Star.propTypes = {
  score: number,
};

Star.defaultProps = {
  score: 0,
};

export default Star;

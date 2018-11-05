import React from 'react';
import { bool } from 'prop-types';
import cx from 'classnames';

export default function OpenStatus(props) {
  const { isClosed } = props;
  return (
    <span
      className={cx('meta__item open-status', {
        'open-status--closed': isClosed,
      })}
    >
      <figure />
      {isClosed ? 'Closed' : 'Open Now'}
    </span>
  );
}

OpenStatus.propTypes = {
  isClosed: bool,
};

OpenStatus.defaultProps = {
  isClosed: false,
};

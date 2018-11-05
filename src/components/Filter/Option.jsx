import React from 'react';
import { func, string, bool } from 'prop-types';
import cx from 'classnames';

export default function Option(props) {
  const { onSelect, value, isActive } = props;

  return (
    <div
      role="presentation"
      onClick={() => onSelect(value)}
      className={cx(`filter-option filter-option--${value}`, {
        'filter-option--active': isActive,
      })}
    >
      <figure />
      <span>{value}</span>
    </div>
  );
}

Option.propTypes = {
  onSelect: func.isRequired,
  value: string.isRequired,
  isActive: bool,
};

Option.defaultProps = {
  isActive: false,
};

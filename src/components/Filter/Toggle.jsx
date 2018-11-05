import React from 'react';
import { func, node, bool, string } from 'prop-types';
import cx from 'classnames';

export default function Toggle(props) {
  const { onSelect, type, children, isActive } = props;

  const select = () => onSelect(type, !isActive);

  return (
    <div
      onClick={select}
      role="presentation"
      className={cx('filter-toggle', {
        'filter-toggle--active': isActive,
      })}
    >
      <figure />
      {children}
    </div>
  );
}

Toggle.propTypes = {
  children: node.isRequired,
  isActive: bool,
  onSelect: func,
  type: string,
};

Toggle.defaultProps = {
  isActive: false,
};

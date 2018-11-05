import React from 'react';
import { func } from 'prop-types';

export default function Clear(props) {
  const { onClear } = props;
  return (
    <div onClick={onClear} role="presentation" className="filter-clear">
      Clear All
    </div>
  );
}

Clear.propTypes = {
  onClear: func,
};

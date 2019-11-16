import React, { FC } from 'react';

import './Option.scss';
import { OptionIcon } from '../OptionIcon/OptionIcon';

import { OptionProps } from './Option.types';

export const Option: FC<OptionProps> = ({ value, children, onSelect, selected = false }) => {
  return (
    <li
      className="option"
      onClick={() => onSelect(value)}
      onKeyDown={() => onSelect(value)}
      role="option"
      aria-selected={selected}
    >
      <OptionIcon checked={selected} />
      <span className="option__name">{children}</span>
    </li>
  );
};

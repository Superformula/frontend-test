import React, { FC, useState } from 'react';
import classNames from 'classnames';

import { CheckboxProps } from './Checkbox.types';
import { CheckboxIcon } from './CheckboxIcon/CheckboxIcon';
import './Checkbox.scss';

export const Checkbox: FC<CheckboxProps> = ({ name, checked: propChecked, onChange, className, style }) => {
  const [checked, setChecked] = useState(false);
  const isChecked = propChecked !== undefined ? propChecked : checked;

  const handleChange = () => {
    if (propChecked === undefined) {
      setChecked(!isChecked);
    }

    onChange(!isChecked);
  };

  return (
    <label htmlFor={name} className={classNames('checkbox-wrapper', className)} style={style}>
      <input
        id={name}
        type="checkbox"
        className="checkbox-wrapper__checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <CheckboxIcon checked={isChecked} />
      <span className="checkbox-wrapper__label">Open Now</span>
    </label>
  );
};

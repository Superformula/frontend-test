import React, { FC, useState } from 'react';
import classNames from 'classnames';

import { CheckboxProps } from './Checkbox.types';
import { CheckboxIcon } from './CheckboxIcon/CheckboxIcon';
import './Checkbox.scss';

export const Checkbox: FC<CheckboxProps> = ({ name, onChange, className, style }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <label htmlFor={name} className={classNames('checkbox-wrapper', className)} style={style}>
      <input
        id={name}
        type="checkbox"
        className="checkbox-wrapper__checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <CheckboxIcon checked={checked} />
      <span className="checkbox-wrapper__label">Open Now</span>
    </label>
  );
};

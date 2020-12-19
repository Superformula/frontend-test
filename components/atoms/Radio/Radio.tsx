import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Radio.module.scss';

import radioChecked from './assets/radio-checked.svg';
import radioUnchecked from './assets/radio-unchecked.svg';

export interface RadioProps {
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (value: string) => void;
}

interface IndicatorProps extends HTMLAttributes<HTMLElement>{
  checked: boolean;
}

const Indicator: FC<IndicatorProps> = ({ checked }) => {
  let src = '';
  let alt = '';

  if (checked) {
    src = radioChecked;
    alt = 'checked radio input';
  } else {
    src = radioUnchecked;
    alt = 'unchecked radio input';
  }

  return <img src={src} alt={alt} />;
};

export const Radio: FC<RadioProps> = ({
  children,
  name = '',
  value = '',
  checked = false,
  onChange,
}) => {
  const elementClass = classNames({
    [styles.radio]: true,
  });

  return (
    <label className={elementClass}>
      <Indicator checked={checked} />

      <input
        type="radio"
        name={name}
        checked={checked}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      {children}
    </label>
  );
};

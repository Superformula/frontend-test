import classNames from 'classnames';
import React, {
  FC,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react';

import styles from './Radio.module.scss';
import radioChecked from './assets/radio-checked.svg';
import radioUnchecked from './assets/radio-unchecked.svg';

export interface RadioProps {
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

interface IndicatorProps extends HTMLAttributes<HTMLElement>{
  checked?: boolean;
}

const Indicator: FC<IndicatorProps> = ({ checked }) => {
  const [src, setSrc] = useState<string>('');
  const [alt, setAlt] = useState<string>('');

  useEffect(() => {
    if (checked) {
      setSrc(radioChecked);
      setAlt('checked radio input');
    } else {
      setSrc(radioUnchecked);
      setAlt('unchecked radio input');
    }
  }, [checked]);

  return <img src={src} alt={alt} />;
};

export const Radio: FC<RadioProps> = ({
  children, checked = false, onChange,
}) => {
  const elementClass = classNames({
    [styles.radio]: true,
  });

  const handleChange = (value: boolean) => {
    if (onChange) onChange(value);
  };

  return (
    <label className={elementClass}>
      <Indicator checked={checked} />

      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => handleChange(event.target.checked)}
      />

      {children}
    </label>
  );
};

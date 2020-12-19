import classNames from 'classnames';
import React, {
  FC,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react';

import styles from './Checkbox.module.scss';
import checkboxChecked from './assets/checkbox-checked.svg';
import checkboxUnchecked from './assets/checkbox-unchecked.svg';

export interface CheckboxProps {
  name?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

interface IndicatorProps extends HTMLAttributes<HTMLElement>{
  checked: boolean;
}

const Indicator: FC<IndicatorProps> = ({ checked }) => {
  const [src, setSrc] = useState<string>('');
  const [alt, setAlt] = useState<string>('');

  useEffect(() => {
    if (checked) {
      setSrc(checkboxChecked);
      setAlt('checked checkbox input');
    } else {
      setSrc(checkboxUnchecked);
      setAlt('unchecked checkbox input');
    }
  }, [checked]);

  return <img src={src} alt={alt} />;
};

export const Checkbox: FC<CheckboxProps> = ({
  children, name = '', checked = false, onChange,
}) => {
  const elementClass = classNames({
    [styles.checkbox]: true,
  });

  return (
    <label className={elementClass}>
      <Indicator checked={checked} />

      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />

      {children}
    </label>
  );
};

import classNames from 'classnames';
import React, {
  FC, useEffect, useRef, useState,
} from 'react';

import arrow from './assets/arrow.svg';
import styles from './Select.module.scss';

import { Checkbox, Typography } from '~/components/atoms';
import { useOutsideClick } from '~/utils/hooks';

export type SelectOption = {
  id: string;
  text: string;
}

export interface SelectProps {
  label: string;
  options: SelectOption[];
  value: string | null;
  onChange: (value: string) => void;
}

export const Select: FC<SelectProps> = ({
  label, options, value, onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<string | null>(null);

  const ref = useRef();

  useOutsideClick(ref, () => {
    if (isOpen) setIsOpen(false);
  });

  const toggle = () => setIsOpen(!isOpen);

  const dropdownClass = classNames({
    [styles.dropdown]: true,
  });

  const headerClass = classNames({
    [styles['dropdown-header']]: true,
  });

  const arrowClass = classNames({
    [styles['dropdown-header-arrow']]: true,
    [styles['dropdown-header-arrow--rotate']]: isOpen,
  });

  const containerClass = classNames({
    [styles['dropdown-container']]: true,
    [styles['dropdown-container--open']]: isOpen,
  });

  const handleChange = (newValue: string) => {
    onChange(newValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const item = options.find(({ id }) => id === value);
    if (item) setSelectedText(item.text);
    else setSelectedText(null);
  }, [options, value]);

  return (
    <div className={dropdownClass}>
      <div className={headerClass} onClick={toggle}>
        <Typography variant="span">{selectedText || label}</Typography>
        <img className={arrowClass} src={arrow} alt="dropdown arrow" />
      </div>

      <hr />

      <div ref={ref} className={containerClass}>
        {options.map(({ id, text }) => (
          <Checkbox
            key={id}
            checked={value === id}
            onChange={() => handleChange(id)}
          >
            {text}
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

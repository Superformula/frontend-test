import classNames from 'classnames';
import React, { FC, useRef, useState } from 'react';

import arrow from './assets/arrow.svg';
import styles from './Select.module.scss';

import { Checkbox, Typography } from '~/components/atoms';
import { useOutsideClick } from '~/utils/hooks';

export type SelectOption = {
  id: string;
  text: string;
}

export interface SelectProps {

}

export const Select: FC<SelectProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);

  const ref = useRef();

  useOutsideClick(ref, () => {
    if (isOpen) setIsOpen(false);
  });

  const options: SelectOption[] = [{
    id: 'all',
    text: 'All',
  }, {
    id: 'italian',
    text: 'Italian',
  }, {
    id: 'seafood',
    text: 'Seafood',
  }, {
    id: 'steakhouses',
    text: 'Steakhouses',
  }, {
    id: 'japanese',
    text: 'Japanese',
  }, {
    id: 'american',
    text: 'American',
  }, {
    id: 'mexican',
    text: 'Mexican',
  }, {
    id: 'thai',
    text: 'Thai',
  }];

  const toggle = () => setIsOpen(!isOpen);

  const dropdownClass = classNames({
    [styles.dropdown]: true,
  });

  const headerClass = classNames({
    [styles['dropdown-header']]: true,
  });

  const containerClass = classNames({
    [styles['dropdown-container']]: true,
  });

  const handleChange = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className={dropdownClass}>
      <div className={headerClass} onClick={toggle}>
        <Typography variant="span">Categories</Typography>
        <img src={arrow} alt="dropdown arrow" />
      </div>

      <hr />

      {
        isOpen && (
          <div ref={ref} className={containerClass}>
            {options.map(({ id, text }) => (
              <Checkbox
                key={id}
                checked={selected === id}
                onChange={() => handleChange(id)}
              >
                {text}
              </Checkbox>
            ))}
          </div>
        )
      }

    </div>
  );
};

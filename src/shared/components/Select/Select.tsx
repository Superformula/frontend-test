import React, { FC, useState } from 'react';
import classNames from 'classnames';

import caretIcon from '../../../assets/icons/caret.svg';

import './Select.scss';
import { Option } from './Option/Option';
import { SelectProps } from './Select.types';
import { Dropdown } from 'shared/components/Dropdown/Dropdown';

export const Select: FC<SelectProps> = ({
  title,
  options,
  onChange,
  values: valuesProp,
  targetClassName,
  optionsClassName,
  targetStyle,
  optionsStyle,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const values = valuesProp || selectedOptions;

  const handleOptionSelect = (optionValue: string) => {
    const newOptions = values.includes(optionValue)
      ? values.filter(option => option !== optionValue)
      : [...values, optionValue];

    if (!valuesProp) {
      setSelectedOptions(newOptions);
    }

    onChange(newOptions);
  };

  return (
    <Dropdown
      target={() => (
        <div className={classNames('select__target', targetClassName)} style={targetStyle}>
          <span>{title}</span>
          <img src={caretIcon} alt="arrow" />
        </div>
      )}
    >
      {() => (
        <ul className={classNames('select__options-wrapper', optionsClassName)} style={optionsStyle}>
          {options.map(({ value, label }) => (
            <Option key={value} value={value} selected={values.includes(value)} onSelect={handleOptionSelect}>
              {label}
            </Option>
          ))}
        </ul>
      )}
    </Dropdown>
  );
};

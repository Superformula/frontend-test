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
  targetClassName,
  optionsClassName,
  targetStyle,
  optionsStyle,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionSelect = (optionValue: string) => {
    const newOptions = selectedOptions.includes(optionValue)
      ? selectedOptions.filter(option => option !== optionValue)
      : [...selectedOptions, optionValue];

    setSelectedOptions(newOptions);
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
            <Option key={value} value={value} selected={selectedOptions.includes(value)} onSelect={handleOptionSelect}>
              {label}
            </Option>
          ))}
        </ul>
      )}
    </Dropdown>
  );
};

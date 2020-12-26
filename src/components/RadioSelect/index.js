import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { DICTIONARY } from 'consts/dictionary';
import { PRICES } from 'consts/price';
import { useClickOutside } from 'hooks/useClickOutside';
import { RadioButton } from '../RadioButton';
import { Wrapper } from './Wrapper';
import { Trigger } from './Trigger';
import { Options } from './Options';

export const RadioSelect = ({ label, options, onChange, name, selected }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = useCallback(() => setExpanded(!expanded), [
    expanded,
    setExpanded,
  ]);
  const optionsRef = useRef();
  useClickOutside(optionsRef, setExpanded);

  return (
    <Wrapper {...{ expanded, ref: optionsRef }}>
      <Trigger onClick={toggleExpanded}>{label}</Trigger>

      {expanded && (
        <Options>
          <RadioButton {...{ name, onChange, value: '', checked: !selected }}>
            {DICTIONARY.ALL}
          </RadioButton>
          {options.map(({ label, value }) => (
            <RadioButton
              {...{
                key: value,
                id: `${name}-${value}`,
                checked: value === selected,
                value,
                name,
                onChange,
              }}
            >
              {label}
            </RadioButton>
          ))}
        </Options>
      )}
    </Wrapper>
  );
};

RadioSelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

RadioSelect.defaultProps = {
  label: DICTIONARY.PRICE,
  options: PRICES,
};

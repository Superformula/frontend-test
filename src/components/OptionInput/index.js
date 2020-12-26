import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Wrapper';
import { Input } from './Input';
import { Label } from './Label';

export const OptionInput = ({
  children,
  onChange,
  id,
  checked,
  type,
  name,
  ...otherProps
}) => (
  <Wrapper>
    <Input
      {...{ onChange, checked, type, name, id: id || name, ...otherProps }}
    />
    <Label htmlFor={id || name}>{children}</Label>
  </Wrapper>
);

OptionInput.displayName = 'OptionInput';

OptionInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  type: PropTypes.oneOf(['radio', 'checkbox']),
};

import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Wrapper';
import { Input } from './Input';
import { Label } from './Label';

export const Checkbox = ({ id, onChange, children }) => (
  <Wrapper>
    <Input {...{ onChange, id }} />
    <Label htmlFor={id}>{children}</Label>
  </Wrapper>
)

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
};

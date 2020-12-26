import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './Input';
import { Label } from './Label';
import { DICTIONARY } from 'consts/dictionary';

export const ToggleSwitch = ({ id, onChange }) => (
  <>
    <Input {...{ onChange, id }} />
    <Label htmlFor={id}>{DICTIONARY.TOGGLE}</Label>
  </>
);

ToggleSwitch.displayName = 'ToggleSwitch';

ToggleSwitch.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
};

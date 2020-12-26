import React from 'react';
import PropTypes from 'prop-types';
import { OptionInput } from '../OptionInput';

export const Checkbox = props => <OptionInput type="checkbox" {...props} />;

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

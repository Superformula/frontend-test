import React from 'react';
import PropTypes from 'prop-types';
import { OptionInput } from '../OptionInput';

export const RadioButton = props => <OptionInput type="radio" {...props} />;

RadioButton.displayName = 'RadioButton';

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

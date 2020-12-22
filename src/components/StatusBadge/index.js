import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from './Badge';
import { DICTIONARY } from '../../constants/dictionary';

export const StatusBadge = ({ isOpen }) => (
  <Badge {...{ isOpen }}>{isOpen ? DICTIONARY.OPEN : DICTIONARY.CLOSED}</Badge>
);

StatusBadge.propTypes = {
  isOpen: PropTypes.bool,
};

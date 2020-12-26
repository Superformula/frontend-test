import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Wrapper';
import { Dot } from './Dot';
import { GenericLabel } from '../GenericLabel';
import { DICTIONARY } from 'consts/dictionary';

export const StatusIndicator = ({ isOpen, xl, uppercase }) => (
  <Wrapper>
    <Dot {...{ isOpen, xl }} />
    <GenericLabel {...{ xl, uppercase }}>
      {isOpen ? DICTIONARY.OPEN_NOW : DICTIONARY.CLOSED}
    </GenericLabel>
  </Wrapper>
);

StatusIndicator.propTypes = {
  isOpen: PropTypes.bool,
  xl: PropTypes.bool,
  uppercase: PropTypes.bool,
};

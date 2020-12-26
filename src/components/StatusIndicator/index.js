import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Wrapper';
import { Dot } from './Dot';
import { GenericLabel } from '../GenericLabel';
import { DICTIONARY } from 'consts/dictionary';

export const StatusIndicator = ({ isOpen }) => (
  <Wrapper>
    <Dot {...{ isOpen }} />
    <GenericLabel>
      {isOpen ? DICTIONARY.OPEN_NOW : DICTIONARY.CLOSED}
    </GenericLabel>
  </Wrapper>
);

StatusIndicator.propTypes = {
  isOpen: PropTypes.bool,
};

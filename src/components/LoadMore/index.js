import React from 'react';
import { ButtonWrapper } from './ButtonWrapper';
import { ActionButton } from './ActionButton';

export const LoadMore = props => (
  <ButtonWrapper>
    <ActionButton {...props} />
  </ButtonWrapper>
);

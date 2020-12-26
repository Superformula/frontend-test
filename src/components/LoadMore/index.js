import React from 'react';
import { DICTIONARY } from 'consts/dictionary';
import { ButtonWrapper } from './ButtonWrapper';
import { ActionButton } from './ActionButton';

export const LoadMore = props => (
  <ButtonWrapper>
    <ActionButton {...props}> {DICTIONARY.LOAD_MORE}</ActionButton>
  </ButtonWrapper>
);

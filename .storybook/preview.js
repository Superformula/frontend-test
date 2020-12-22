import React from 'react';
import { GlobalStyles } from '../src/config/GlobalStyles';

const withGlobalStyles = Story => (
  <>
    <GlobalStyles />
    <Story />
  </>
);

export const decorators = [withGlobalStyles];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

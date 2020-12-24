import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '../src/config/GlobalStyles';

const withPageWrapper = Story => (
  <BrowserRouter>
    <GlobalStyles />
    <Story />
  </BrowserRouter>
);

export const decorators = [withPageWrapper];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

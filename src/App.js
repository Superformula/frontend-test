import React from 'react';
import { Routes } from './routes';
import { GlobalStyles } from './config/GlobalStyles';
import { Lazy } from './components/Lazy';

export const App = () => (
  <>
    <GlobalStyles />
    <Lazy component={Routes} />
  </>
);

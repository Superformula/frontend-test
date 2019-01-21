import React from 'react';
import { shallowWithTheme } from '../helpers/tests/withTheme';

import App from './App';

describe('App Component', () => {
  it('renders correctly', () => {
    const component = shallowWithTheme(<App />);
    expect(component).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import { Header } from './Header';

describe('Header component', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <Header
        title="Restaurants"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua."
      />,
    );

    expect(container.querySelector('.restaurants-header')).toBeTruthy();
  });
});

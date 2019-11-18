import React from 'react';
import { render } from '@testing-library/react';

import { Header } from './Header';

describe('Header component', () => {
  it('renders correctly with default props', () => {
    const { container, getByText } = render(<Header title="Restaurants" description="Lorem ipsum dolor sit amet" />);

    expect(container.querySelector('.restaurants-header')).toBeTruthy();
    expect(getByText('Restaurants')).toBeTruthy();
    expect(getByText('Lorem ipsum dolor sit amet')).toBeTruthy();
  });
});

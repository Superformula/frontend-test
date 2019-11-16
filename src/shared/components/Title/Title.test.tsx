import React from 'react';
import { render } from '@testing-library/react';

import { Title } from './Title';

describe('Title component', () => {
  it('renders correctly with default props', () => {
    const { container, getByText } = render(<Title>Restaurants</Title>);

    expect(container.querySelector('.title')).toBeTruthy();
    expect(getByText('Restaurants')).toBeTruthy();
  });
});

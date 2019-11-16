import React from 'react';
import { render } from '@testing-library/react';

import { RestaurantsGrid } from './RestaurantsGrid';

describe('RestaurantsGrid component', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<RestaurantsGrid restaurants={[]} />);

    expect(container.querySelector('.restaurants-grid')).toBeTruthy();
  });
});

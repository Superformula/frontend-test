import React from 'react';
import { render } from '@testing-library/react';

import { RestaurantStatus } from './RestaurantStatus';

describe('RestaurantStatus component', () => {
  it('renders correctly if not open', () => {
    const { container, getByText } = render(<RestaurantStatus isOpen={false} />);

    expect(container.querySelector('.restaurant-status')).toBeTruthy();
    expect(container.querySelector('.restaurant-status__dot--red')).toBeTruthy();
    expect(container.querySelector('.restaurant-status--big')).toBeFalsy();
    expect(getByText('Closed')).toBeTruthy();
  });

  it('renders correctly if open and size is big', () => {
    const { container, getByText } = render(<RestaurantStatus isOpen size={RestaurantStatus.size.BIG} />);

    expect(container.querySelector('.restaurant-status')).toBeTruthy();
    expect(container.querySelector('.restaurant-status__dot--red')).toBeFalsy();
    expect(container.querySelector('.restaurant-status--big')).toBeTruthy();
    expect(getByText('Open Now')).toBeTruthy();
  });
});

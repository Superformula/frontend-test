import React from 'react';
import { render } from '@testing-library/react';

import { CuisinePriceInfo } from './CuisinePriceInfo';

describe('CuisinePriceInfo component', () => {
  it('renders correctly with default props', () => {
    const { container, getByText } = render(<CuisinePriceInfo cuisineName="Thai" priceRange="$$" />);

    expect(container.querySelector('.cuisine-price-info')).toBeTruthy();
    expect(getByText('Thai')).toBeTruthy();
    expect(getByText('$$')).toBeTruthy();
  });

  it('renders correctly with big size', () => {
    const { container, getByText } = render(
      <CuisinePriceInfo cuisineName="Thai" priceRange="$$" size={CuisinePriceInfo.size.BIG} />,
    );

    expect(container.querySelector('.cuisine-price-info')).toBeTruthy();
    expect(container.querySelector('.cuisine-price-info--big')).toBeTruthy();
    expect(getByText('Thai')).toBeTruthy();
    expect(getByText('$$')).toBeTruthy();
  });
});

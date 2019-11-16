import React from 'react';
import { act, fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react';

import { RestaurantsFiltersWrapper } from './RestaurantsFiltersWrapper';

describe('RestaurantsFiltersWrapper component', () => {
  it('calls onChange when open now checkbox clicked', () => {
    const onChange = jest.fn();
    const filters = {
      price: [],
      categories: [],
      openNow: false,
    };

    const { container } = render(<RestaurantsFiltersWrapper filters={filters} onChange={onChange} />);

    expect(container.querySelector('.restaurants-filters')).toBeTruthy();

    act(() => {
      fireEvent.click(container.querySelector('.checkbox-wrapper') as HTMLElement);
    });

    expect(onChange).toBeCalledWith({ ...filters, openNow: true });
  });

  it('calls onChange when price on dropdown clicked', async () => {
    const onChange = jest.fn();
    const filters = {
      price: [],
      categories: [],
      openNow: false,
    };

    const { container, getByText } = render(<RestaurantsFiltersWrapper filters={filters} onChange={onChange} />);

    expect(container.querySelector('.restaurants-filters')).toBeTruthy();

    act(() => {
      fireEvent.click(getByText(/Price/));
    });

    await act(async () => {
      fireEvent.click(getByText('$'));
    });

    expect(onChange).toBeCalledWith({ ...filters, price: ['1'] });
  });

  it('calls onChange when category on dropdown clicked', async () => {
    const onChange = jest.fn();
    const filters = {
      price: [],
      categories: [],
      openNow: false,
    };

    const { container, getByText } = render(<RestaurantsFiltersWrapper filters={filters} onChange={onChange} />);

    expect(container.querySelector('.restaurants-filters')).toBeTruthy();

    act(() => {
      fireEvent.click(getByText(/Categories/));
    });

    await act(async () => {
      fireEvent.click(getByText(/Seafood/));
    });

    expect(onChange).toBeCalledWith({ ...filters, categories: ['seafood'] });
  });
});

import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';

import { RestaurantsFiltersWrapper } from './RestaurantsFiltersWrapper';

const clearFilters = {
  price: [],
  categories: [],
  openNow: false,
};

describe('RestaurantsFiltersWrapper component', () => {
  it('calls onChange when open now checkbox clicked', () => {
    const onChange = jest.fn();

    const { container } = render(<RestaurantsFiltersWrapper filters={clearFilters} onChange={onChange} />);

    expect(container.querySelector('.restaurants-filters')).toBeTruthy();

    act(() => {
      fireEvent.click(container.querySelector('.checkbox-wrapper') as HTMLElement);
    });

    expect(onChange).toBeCalledWith({ ...clearFilters, openNow: true });
  });

  it('calls onChange when price on dropdown clicked', async () => {
    const onChange = jest.fn();

    const { container, getByText } = render(<RestaurantsFiltersWrapper filters={clearFilters} onChange={onChange} />);

    expect(container.querySelector('.restaurants-filters')).toBeTruthy();

    act(() => {
      fireEvent.click(getByText(/Price/));
    });

    await act(async () => {
      fireEvent.click(getByText('$'));
    });

    expect(onChange).toBeCalledWith({ ...clearFilters, price: ['1'] });
  });

  it('calls onChange when category on dropdown clicked', async () => {
    const onChange = jest.fn();

    const { container, getByText } = render(<RestaurantsFiltersWrapper filters={clearFilters} onChange={onChange} />);

    expect(container.querySelector('.restaurants-filters')).toBeTruthy();

    act(() => {
      fireEvent.click(getByText(/Categories/));
    });

    await act(async () => {
      fireEvent.click(getByText(/Seafood/));
    });

    expect(onChange).toBeCalledWith({ ...clearFilters, categories: ['seafood'] });
  });

  it('calls onChange with cleared filters on clear all click', async () => {
    const onChange = jest.fn();

    const { container, getByText } = render(<RestaurantsFiltersWrapper filters={clearFilters} onChange={onChange} />);

    expect(container.querySelector('.restaurants-filters')).toBeTruthy();

    act(() => {
      fireEvent.click(getByText(/Clear all/));
    });

    expect(onChange).toBeCalledWith(clearFilters);
  });

  it('make clear all button disabled if not filter selected', async () => {
    const onChange = jest.fn();

    const { container } = render(<RestaurantsFiltersWrapper filters={clearFilters} onChange={onChange} />);

    expect(container.querySelector('.restaurants-filters__clear-button.button--disabled')).toBeTruthy();
  });

  it('make clear all button enabled if filter selected', async () => {
    const onChange = jest.fn();

    const { container } = render(
      <RestaurantsFiltersWrapper filters={{ ...clearFilters, openNow: true }} onChange={onChange} />,
    );

    expect(container.querySelector('.restaurants-filters__clear-button.button--disabled')).toBeFalsy();
  });

  it('shows loader if showLoading prop is true', async () => {
    const onChange = jest.fn();

    const { container } = render(
      <RestaurantsFiltersWrapper filters={{ ...clearFilters, openNow: true }} onChange={onChange} showLoader />,
    );

    expect(container.querySelector('.loader')).toBeTruthy();
  });
});

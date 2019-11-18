import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';

import { Select } from './Select';

const priceOptions = [
  { value: '$', label: '$' },
  { value: '$$', label: '$$' },
  { value: '$$$', label: '$$$' },
];

describe('Select component', () => {
  it('renders correctly and fires onChange action with proper value', () => {
    const onChange = jest.fn();

    const { container, getByText } = render(
      <Select
        title="Price"
        targetStyle={{ width: 200 }}
        optionsStyle={{ width: 200 }}
        options={priceOptions}
        onChange={onChange}
      />,
    );

    expect(container.querySelector('.select__target')).toBeTruthy();
    expect(getByText('Price')).toBeTruthy();

    act(() => {
      fireEvent.click(getByText('Price'));
    });

    expect(getByText('All')).toBeTruthy();
    expect(getByText('$')).toBeTruthy();
    expect(getByText('$$')).toBeTruthy();
    expect(getByText('$$$')).toBeTruthy();

    act(() => {
      fireEvent.click(getByText('$'));
    });

    expect(onChange).toBeCalledWith(['$']);

    act(() => {
      fireEvent.click(getByText('$$'));
    });

    expect(onChange).toBeCalledWith(['$', '$$']);

    act(() => {
      fireEvent.click(getByText('$'));
    });

    expect(onChange).toBeCalledWith(['$$']);
  });

  it('renders with values as props', async () => {
    const onChange = jest.fn();

    const { container, getByText } = render(
      <Select
        title="Price"
        targetStyle={{ width: 200 }}
        optionsStyle={{ width: 200 }}
        options={priceOptions}
        onChange={onChange}
        values={['$']}
      />,
    );

    expect(container.querySelector('.select__target')).toBeTruthy();
    expect(getByText('Price')).toBeTruthy();

    act(() => {
      fireEvent.click(getByText('Price'));
    });

    await act(async () => {
      fireEvent.click(getByText('$$'));
    });

    expect(onChange).toBeCalledWith(['$', '$$']);
  });
});

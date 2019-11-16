import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox component', () => {
  it('renders properly with default props', () => {
    const { container } = render(<Checkbox name="Open now" onChange={() => {}} />);

    expect(container.querySelector('.checkbox-wrapper')).toBeTruthy();
    expect((container.querySelector('.checkbox-wrapper') as HTMLElement).textContent).toBe('Open Now');
  });

  it('change checked value on click', () => {
    const onChange = jest.fn();
    const { container } = render(<Checkbox name="Open now" onChange={onChange} />);

    act(() => {
      fireEvent.click(container.querySelector('.checkbox-wrapper') as HTMLElement);
    });

    expect(onChange).toBeCalledWith(true);
  });

  it('renders with checked value passed', () => {
    const onChange = jest.fn();
    const { container } = render(<Checkbox name="Open now" checked={false} onChange={onChange} />);

    act(() => {
      fireEvent.click(container.querySelector('.checkbox-wrapper') as HTMLElement);
    });

    expect(onChange).toBeCalledWith(true);
    expect((container.querySelector('.checkbox-wrapper__checkbox') as HTMLInputElement).checked).toBe(false);
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import { StarRating } from './StarRating';

describe('StarRating component', () => {
  it('renders correctly with given 4.5 star rating', () => {
    const { container, queryAllByTestId } = render(<StarRating rating={4.5} />);

    expect(container.querySelector('.star-rating')).toBeTruthy();
    expect(queryAllByTestId('star-full').length).toBe(4);
    expect(queryAllByTestId('star-half').length).toBe(1);
  });

  it('renders correctly with given 2.5 star rating', () => {
    const { container, queryAllByTestId } = render(<StarRating rating={2.5} />);

    expect(container.querySelector('.star-rating')).toBeTruthy();
    expect(queryAllByTestId('star-full').length).toBe(2);
    expect(queryAllByTestId('star-half').length).toBe(1);
    expect(queryAllByTestId('star-empty').length).toBe(2);
  });

  it('renders correctly with given 0 star rating', () => {
    const { container, queryAllByTestId } = render(<StarRating rating={0} />);

    expect(container.querySelector('.star-rating')).toBeTruthy();
    expect(queryAllByTestId('star-full').length).toBe(0);
    expect(queryAllByTestId('star-half').length).toBe(0);
    expect(queryAllByTestId('star-empty').length).toBe(5);
  });

  it('renders correctly with given 5 star rating', () => {
    const { container, queryAllByTestId } = render(<StarRating rating={5} />);

    expect(container.querySelector('.star-rating')).toBeTruthy();
    expect(queryAllByTestId('star-full').length).toBe(5);
    expect(queryAllByTestId('star-half').length).toBe(0);
    expect(queryAllByTestId('star-empty').length).toBe(0);
  });
});

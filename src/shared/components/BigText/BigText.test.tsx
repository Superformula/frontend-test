import React from 'react';
import { render } from '@testing-library/react';
import { BigText } from "./BigText"

describe('BigText', () => {
  it('renders BigText component', () => {
    const { container } = render(<BigText />);

    expect(container.querySelector('.big-text')).toBeTruthy();
  })
});

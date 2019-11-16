import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button component', () => {
  it('renders correctly with default props', () => {
    const { container, getByText } = render(<Button>Clear all</Button>);

    expect(container.querySelector('.button')).toBeTruthy();
    expect(getByText('Clear all')).toBeTruthy();
  });

  it('renders correctly disabled small full width button', () => {
    const { container, getByText } = render(
      <Button fullWidth disabled size={Button.size.SMALL}>
        Clear all
      </Button>,
    );

    expect(container.querySelector('.button')).toBeTruthy();
    expect(container.querySelector('.button--full-width')).toBeTruthy();
    expect(container.querySelector('.button--disabled')).toBeTruthy();
    expect(container.querySelector('.button--small')).toBeTruthy();

    expect(getByText('Clear all')).toBeTruthy();
  });
});

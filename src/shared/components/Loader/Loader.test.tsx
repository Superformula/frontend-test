import React from 'react';
import { render } from '@testing-library/react';

import { Loader } from './Loader';

describe('Loader component', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Loader />);

    expect(container.querySelector('.loader')).toBeTruthy();
  });

  it('renders correctly with fullscreen mode', () => {
    const { container } = render(<Loader isFullscreen />);

    expect(container.querySelector('.loader--fullscreen')).toBeTruthy();
  });
});

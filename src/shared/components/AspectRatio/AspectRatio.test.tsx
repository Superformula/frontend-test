import React from 'react';
import { render } from '@testing-library/react';

import { AspectRatio } from './AspectRatio';

describe('AspectRatio component', () => {
  it('renders correctly with default props', () => {
    const { container, getByText } = render(<AspectRatio ratio={0.6}>Restaurants</AspectRatio>);

    expect(container.querySelector('.aspect-ratio')).toBeTruthy();
    expect((container.querySelector('.aspect-ratio') as HTMLElement).getAttribute('style')).toBe('padding-top: 60%;');
    expect(getByText('Restaurants')).toBeTruthy();
  });
});

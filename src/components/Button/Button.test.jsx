import React from 'react';
import { mountWithTheme } from '../../helpers/tests/withTheme';
import Button from './Button';

describe('Button Component', () => {
  let component;
  it('renders a primary button correctly', () => {
    component = mountWithTheme(<Button variant="primary">Primary</Button>).find('button');
    expect(component).toMatchSnapshot();
  });
  it('renders a secondary button correctly', () => {
    component = mountWithTheme(<Button variant="secondary">Secondary</Button>).find('button');
    expect(component).toMatchSnapshot();
  });
  it('renders a disabled button correctly', () => {
    component = mountWithTheme(<Button variant="primary" disabled>Disabled</Button>).find('button');
    expect(component).toMatchSnapshot();
  });
});

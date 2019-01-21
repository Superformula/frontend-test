import React from 'react';
import { mountWithTheme } from '../../helpers/tests/withTheme';
import FilterNav from './FilterNav';

const defaultProps = {
  toggleFilter: jest.fn(),
  toggleCategory: jest.fn(),
  openNow: true,
  price: '$$',
  category: 'italian',
};

describe('FilterNav Component', () => {
  let component;
  it('renders itself primary button correctly', () => {
    component = mountWithTheme(<FilterNav {...defaultProps}>Primary</FilterNav>).find('FilterNav');
    expect(component).toMatchSnapshot();
  });
});

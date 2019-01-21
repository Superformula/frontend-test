import React from 'react';
import { mountWithTheme } from '../../../helpers/tests/withTheme';
import SelectDropDown from './SelectDropDown';

const defaultProps = {
  heading: 'Test',
  items: [{ title: 'Test', value: 'test' }],
  onSelect: jest.fn(),
  selectedItem: 'test',
};

describe('SelectDropDown Component', () => {
  const component = mountWithTheme(<SelectDropDown {...defaultProps}>Primary</SelectDropDown>).find('SelectDropDown');
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});

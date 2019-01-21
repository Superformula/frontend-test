import React from 'react';
import { shallowWithTheme } from '../../helpers/tests/withTheme';
import Badge from './Badge';

const setUp = (color, textTransform) => (
  shallowWithTheme(
    <Badge statusColor={color} textTransform={textTransform}>test badge</Badge>,
  )).dive();

describe('Button Component', () => {
  let component;
  it('renders a red badge', () => {
    component = setUp('red', 'uppercase');
    expect(component).toMatchSnapshot();
  });
  it('renders a green badge', () => {
    component = setUp('green', 'lowercase');
    expect(component).toMatchSnapshot();
  });
});

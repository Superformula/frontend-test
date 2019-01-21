import React from 'react';
import { mountWithTheme } from '../../helpers/tests/withTheme';
import Card from './Card';

const defaultProps = {
  imageSrc: 'http://awesometest.com/image.jpg',
  title: 'This is awesome',
  rating: 5,
  price: '$$$$',
  closed: false,
  category: 'italian',
  onClick: jest.fn(),
};
const setUp = (props = {}) => mountWithTheme(<Card {...{ ...defaultProps, ...props }}>Primary</Card>).find('Card');
describe('Card Component', () => {
  let component;
  it('renders itself with a primary button correctly', () => {
    component = setUp({ buttonVariant: 'primary' });
    expect(component).toMatchSnapshot();
  });
  it('renders itself with a secondary button correctly', () => {
    component = setUp({ buttonVariant: 'secondary' });
    expect(component).toMatchSnapshot();
  });
  it('has a working onClick function', () => {
    component.find('button').simulate('click');
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});

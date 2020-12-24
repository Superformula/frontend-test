import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../';

describe('Button', () => {
  it('should render without failing', () => {
    const wrapper = shallow(<Button>Click me!</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render secondary button', () => {
    const wrapper = shallow(<Button secondary>Click me!</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});

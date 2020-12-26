import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../';

describe('Button', () => {
  it('should render without failing', () => {
    const wrapper = shallow(<Button>Click me!</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render $secondary button', () => {
    const wrapper = shallow(<Button $secondary>Click me!</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled button', () => {
    const wrapper = shallow(<Button disabled>Click me!</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled $secondary button', () => {
    const wrapper = shallow(
      <Button disabled $$secondary>
        Click me!
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render button filling the width', () => {
    const wrapper = shallow(<Button $fill>Click me!</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render button filling the width', () => {
    const wrapper = shallow(<Button $fill>Click me!</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});

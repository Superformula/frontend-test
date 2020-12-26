import React from 'react';
import { mount } from 'enzyme';
import { OptionInput } from '../';

describe('OptionInput', () => {
  it('should render as checkbox without failing', () => {
    const wrapper = mount(
      <OptionInput id="check-1" type="checkbox">
        Click me!
      </OptionInput>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as radio without failing', () => {
    const wrapper = mount(
      <OptionInput id="check-1" type="radio">
        Click me!
      </OptionInput>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('App Component', () => {
  it('renders a the correct text', () => {
    const ComponentWrapper = mount(<App />);
    expect(ComponentWrapper.find('.test').text()).toBe('Hello World!');
  });
});

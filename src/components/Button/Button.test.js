import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
describe('Button Component', () => {
   it('Simulate onClick with function', () => {
    const mockCallBack = jest.fn();

    const button = shallow(<Button onClick={mockCallBack}>Test</Button>);
    button.find('button').simulate('click');

    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

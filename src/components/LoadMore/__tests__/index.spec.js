import React from 'react';
import { shallow } from 'enzyme';
import { LoadMore } from '../';

describe('LoadMore', () => {
  it('should render without failing', () => {
    const wrapper = shallow(<LoadMore />);
    expect(wrapper).toMatchSnapshot();
  });
});

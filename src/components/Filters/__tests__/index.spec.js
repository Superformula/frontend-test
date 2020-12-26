import React from 'react';
import { mount } from 'enzyme';
import { Filters } from '../';

jest.mock('hooks/useAction');
jest.mock('hooks/useSelector');

describe('Filters', () => {
  it('should render without failing', () => {
    const wrapper = mount(<Filters />);
    expect(wrapper).toMatchSnapshot();
  });
});

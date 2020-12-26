import React from 'react';
import { shallow } from 'enzyme';
import { FiltersBar } from '../';

jest.mock('hooks/useAction');
jest.mock('hooks/useSelector');

describe('FiltersBar', () => {
  it('should render without failing', () => {
    const wrapper = shallow(<FiltersBar />).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

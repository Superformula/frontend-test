import React from 'react';
import { shallow } from 'enzyme';

import OpenClosedIndicator from './OpenClosedIndicator.jsx';

describe('OpenClosedIndicator', () => {
  it('should render correctly', () => {
    const component = shallow(<OpenClosedIndicator />);

    expect(component).toMatchSnapshot();
  });
});

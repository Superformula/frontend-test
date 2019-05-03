import React from 'react';
import { shallow } from 'enzyme';

import OpenClosedIndicator from './OpenClosedIndicator.jsx';

describe('OpenClosedIndicator', () => {
  it('should render correctly', () => {
    const component = shallow(<OpenClosedIndicator closed />);

    expect(component).toMatchSnapshot();
  });

  it('should render open class when closed is false', () => {
    const component = shallow(<OpenClosedIndicator closed={ false } />),
      indicator = component.find('.indicator');

    expect(indicator.hasClass('open')).toBeTruthy();
  });

  it('should render closed class when closed is true', () => {
    const component = shallow(<OpenClosedIndicator closed />),
      indicator = component.find('.indicator');

    expect(indicator.hasClass('closed')).toBeTruthy();
  });
});

import React from 'react';
import { shallowWithTheme } from '../../helpers/tests/withTheme';

import { StarRating } from '..';

describe('StarRating Component', () => {
  let component;
  it('renders a 3.5 star rating', () => {
    component = shallowWithTheme(<StarRating rating={3.5} />).dive();
    expect(component).toMatchSnapshot();
  });
  it('renders a 5 star rating', () => {
    component = shallowWithTheme(<StarRating rating={5} />).dive();
    expect(component).toMatchSnapshot();
  });
  it('renders a 0 star rating', () => {
    component = shallowWithTheme(<StarRating rating={0} />).dive();
    expect(component).toMatchSnapshot();
  });
});

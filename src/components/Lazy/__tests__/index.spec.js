import React from 'react';
import { shallow } from 'enzyme';
import { PageLoader } from 'components/PageLoader';
import Lazy from '../';

describe('Lazy', () => {
  it('should render without failing', () => {
    const Test = () => <div />;
    const wrapper = shallow(<Lazy component={Test} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should use the loader as a fallback', () => {
    const Test = () => <div />;
    const wrapper = shallow(<Lazy component={Test} />);
    const { fallback } = wrapper.find('Suspense').props();
    expect(fallback).toEqual(<PageLoader />);
  });
});

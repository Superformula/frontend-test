import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'
import Filter from './Filter';

describe("Filter Component", () => {
  it("Render Filter component", () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper.find("form")).to.have.lengthOf(1);
  });
});
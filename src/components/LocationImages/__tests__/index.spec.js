import React from 'react';
import { mount } from 'enzyme';
import { LocationImages } from '../';

describe('LocationImages', () => {
  it('should render without failing', () => {
    const wrapper = mount(<LocationImages />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with photos', () => {
    const photos = [
      'http://pathtoimage.com/image-1.png',
      'http://pathtoimage.com/image-2.png',
    ];
    const wrapper = mount(<LocationImages photos={photos} />);
    expect(wrapper).toMatchSnapshot();
  });
});

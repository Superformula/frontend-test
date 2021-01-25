import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Photos from '@components/Photos';

// This default export determines where your story goes in the story list
export default {
  title: 'Photos',
  component: Photos,
};

const PhotosTemplate: Story<ComponentProps<typeof Photos>> = (args) => (
  <Photos {...args} />
);

export const PhotosList = PhotosTemplate.bind({});

PhotosList.args = {
  photos: [
    "https://s3-media4.fl.yelpcdn.com/bphoto/pu9doqMplB5x5SEs8ikW6w/o.jpg"
  ],
  coordinates: {
    latitude: 40.730610,
    longitude: -73.935242
  },
  location: {
    formatted_address: "8872 S Eastern Ave Ste 100 Las Vegas, NV 89123"
  }
};
import React from "react";
import LocationDetailsComp from "../components/location-details";
import '../styles/base.scss';
import sampleImg from './assets/sample.svg'

export default {
  title: "Location Details",
  component: LocationDetailsComp,
  argTypes: {}
};

const Template = args => (
  <div className="app-theme">
    <LocationDetailsComp {...args} />
  </div>
);

export const LocationDetails = Template.bind({});
LocationDetails.args = {
   lat: 100,
   lon: 100,
   images: [sampleImg,sampleImg],
   locationLabel:"Address here"
};

import React from "react";


import RatingComp from "../components/rating";
import '../styles/base.scss';

export default {
  title: "Location Details",
  component: RatingComp,
  argTypes: {}
};

const Template = args => (
  <div className="app-theme">
    <RatingComp {...args} />
  </div>
);

export const LocationDetails = Template.bind({});
LocationDetails.args = {
    value: 3.5
};

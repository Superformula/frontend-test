import React from "react";


import RatingComp from "../components/rating";
import '../styles/base.scss';

export default {
  title: "Rating",
  component: RatingComp,
  argTypes: {}
};

const Template = args => (
  <div className="app-theme">
    <RatingComp {...args} />
  </div>
);

export const Rating = Template.bind({});
Rating.args = {
    value: 3.5
};

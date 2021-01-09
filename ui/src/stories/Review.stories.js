import React from "react";


import ReviewComp from "../components/review";
import '../styles/base.scss';

export default {
  title: "Review Details",
  component: ReviewComp,
  argTypes: {}
};

const Template = args => (
  <div className="app-theme">
    <ReviewComp {...args} />
  </div>
);

export const ReviewDetails = Template.bind({});
ReviewDetails.args = {
    avatar:"",
    name:"Brian B",
    rating:4,
    date:"02/02/2018",
    comment:"The comment goes here"
};

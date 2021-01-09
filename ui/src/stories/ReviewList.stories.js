import React from "react";


import ReviewListComp from "../components/review-list";
import '../styles/base.scss';

export default {
  title: "Review List",
  component: ReviewListComp,
  argTypes: {}
};

const Template = args => (
  <div className="app-theme">
    <ReviewListComp {...args} />
  </div>
);

export const ReviewList = Template.bind({});
ReviewList.args = {
    value: 3.5
};

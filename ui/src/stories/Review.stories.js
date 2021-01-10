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
    comment:`Don't be fooled by the French name, this place oozes with Californian flair. Their space is phenomenal: bright, warm colors yet clean and inviting. I've been twice for brunch and both times have been incredible! On our next trip to LA, I should really check out dinner since they seem to do more classic French preparations at that time.`
};

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
   reviewCount: 10,
   items: new Array(10).fill(0).map((_, ix)=>{
    return {
      id: ix, 
      avatar:'',
      name:"Author Name",
      date:"10/09/2018",
      rating:Math.abs(Math.random()*6),
      comment:`Don't be fooled by the French name, this place oozes with Californian flair. Their space is phenomenal: bright, warm colors yet clean and inviting. I've been twice for brunch and both times have been incredible! On our next trip to LA, I should really check out dinner since they seem to do more classic French preparations at that time.`
    }
   })
};

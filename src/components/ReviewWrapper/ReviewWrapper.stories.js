import React from "react";

import ReviewWrapper from "./ReviewWrapper";

export default {
  component: ReviewWrapper,
  title: "ReviewWrapper"
};

const reviewText = "Don't be fooled by the French name, this place oozes with Californian flair. Their space is phenomenal: bright, warm colors yet clean and inviting. I've been twice for brunch and both times have been incredible! On our next trip to LA, I should really check out dinner since they seem to do more classic French preparations at that time. For brunch, drool over the cast-iron pots of shakshouka, perfectly jiggly eggs over kimchi fried rice, marvel at their artful breakfast toasts and do good by ordering a fresh squeezed green juice. You'll need it to feel less guilty when you devour their sweet sticky bun or their creamy delicious Hazelnut puffs. OMG. I\'m still dreaming about those cream puffs right now ... Calories be damned."
const userImage = 'http://mattnihiser.com/images/me_guyana.JPG'


export const defaultView = () => 
  <div style={{display: 'grid'}}>
    <ReviewWrapper 
      rating = {4}
      reviewText = {reviewText}
      reviewDate = '10/9/2018'
      reviewerName = 'Brian B'
      userImage = {userImage} 
    />

  <ReviewWrapper 
      rating = {4}
      reviewText = {reviewText}
      reviewDate = '10/9/2018'
      reviewerName = 'Matt N.'
      userImage = {userImage} 
    />

    <ReviewWrapper 
      rating = {4}
      reviewText = {reviewText}
      reviewDate = '10/9/2018'
      reviewerName = 'Matt N.'
      userImage = {userImage} 
    />
  </div>
  ;

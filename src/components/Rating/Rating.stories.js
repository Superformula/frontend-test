import React from "react";

import Rating from "./Rating";

export default {
  component: Rating,
  title: "Rating"
};

export const noRating = () => <Rating />;

export const wholeStar = () => <Rating rating={3} />;

export const halfStar = () => <Rating rating={4.5} />;

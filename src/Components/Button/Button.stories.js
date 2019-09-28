import React from "react";

import Button from "./Button";

export default {
  component: Button,
  title: "Button"
};

const color = ["inverted"];

export const regular = () => <Button>Learn More</Button>;

export const inverted = () => <Button inverted>Learn More</Button>;

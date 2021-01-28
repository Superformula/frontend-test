import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Rating, { IProps } from "./index";

export default {
  title: "Rating",
  component: Rating,
  args: {},
} as Meta;

const Template: Story<IProps> = (args) => <Rating {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  score: 50,
};

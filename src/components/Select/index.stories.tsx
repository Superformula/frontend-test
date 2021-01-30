import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Select, { IProps } from "./index";

export default {
  title: "Select",
  component: Select,
  args: {},
} as Meta;

const Template: Story<IProps> = (args) => <Select {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: "My Label",
};

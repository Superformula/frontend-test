import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Radio, { IProps } from "./index";

export default {
  title: "Radio",
  component: Radio,
  args: {},
} as Meta;

const Template: Story<IProps> = (args) => <Radio {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: "My Label",
  value: "a value",
};

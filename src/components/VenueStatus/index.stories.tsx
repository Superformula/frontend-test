import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import VenueStatus, { IProps, EVenueStatus } from "./index";

export default {
  title: "VenueStatus",
  component: VenueStatus,
  args: {},
} as Meta;

const Template: Story<IProps> = (args) => <VenueStatus {...args} />;

export const Main = Template.bind({});
Main.args = {
  status: EVenueStatus.closed,
};

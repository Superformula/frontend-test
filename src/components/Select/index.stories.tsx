import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Select, { IProps } from "./index";

export default {
  title: "Select",
  component: Select,
  args: {},
} as Meta;

function Wrapper(props: { args: any }) {
  const [value, setValue] = useState<string | undefined>();

  return (
    <Select
      {...props.args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

const Template: Story<IProps> = (args) => <Wrapper args={args} />;

export const Main = Template.bind({});
Main.args = {
  label: "My Label",
  options: [
    {
      value: "option 1",
      id: "opt-1",
      label: "option1",
    },
    {
      value: "option 2",
      id: "opt-2",
      label: "option2",
    },
    {
      value: "option 3",
      id: "opt-3",
      label: "option3",
    },
  ],
};

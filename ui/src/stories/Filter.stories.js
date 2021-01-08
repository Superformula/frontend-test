import React from "react";


import Filter from "../components/filter";
import '../styles/base.scss';

export default {
  title: "Filter",
  component: Filter,
  argTypes: {}
};

const Template = args => (
  <div className="app-theme">
    <Filter {...args} />
  </div>
);

export const FilterAndDropdowns = Template.bind({});
FilterAndDropdowns.args = {
  primary: true,
  label: "Button"
};

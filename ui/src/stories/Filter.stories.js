import React from "react";


import Filter from "../components/filter";
import '../styles/base.scss';

export default {
  title: "UI/Filter",
  component: Filter,
  argTypes: {}
};

const Template = args => (
  <div className="app-theme">
    <Filter {...args} />
  </div>
);

export const FilterContainer = Template.bind({});
FilterContainer.args = {
  primary: true,
  label: "Button"
};

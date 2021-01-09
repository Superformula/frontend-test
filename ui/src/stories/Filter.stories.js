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

export const EmptyFilter = Template.bind({});
EmptyFilter.args = {
  primary: true,
  label: "Button",
  priceOptions:[{id:"$", name:"$"},{id:"$$", name:"$$"}],
  categoryOptions:[{id:"1", name:"Category 1"},{id:"2", name:"Category 2"}],
  priceFilterValue:null,
  categoryFilterValue:null,
};


export const FilterWithValues = Template.bind({});
FilterWithValues.args = {
  primary: true,
  label: "Button",
  priceOptions:[{id:"$", name:"$"},{id:"$$", name:"$$"}],
  categoryOptions:[{id:"1", name:"Category 1"},{id:"2", name:"Category 2"}],
  priceFilterValue:"$$",
  categoryFilterValue:"2",
};

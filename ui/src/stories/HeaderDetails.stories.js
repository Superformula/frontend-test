import React from "react";


import HeaderComp from "../components/header-detail";
import '../styles/base.scss';

export default {
  title: "Header (Details Page)",
  component: HeaderComp,
  argTypes: {}
};

const Template = args => (
  <div className="app-theme">
    <HeaderComp {...args} />
  </div>
);

export const HeaderDetails = Template.bind({});
HeaderDetails.args = {
  isOpen: true,
  name: "Name here",
  category: "The Category",
  price:"$$$",
  rating: 3.5
};


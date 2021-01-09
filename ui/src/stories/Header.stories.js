import React from "react";


import HeaderComp from "../components/header";
import '../styles/base.scss';

export default {
  title: "Header (Search)",
  component: HeaderComp,
  argTypes: {}
};

const Template = args => (
  <div className="app-theme">
    <HeaderComp {...args} />
  </div>
);

export const Header = Template.bind({});
Header.args = {
};

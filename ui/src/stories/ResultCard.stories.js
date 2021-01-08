import React from "react";


import ResultCard from "../components/result-card";
import '../styles/base.scss';
import sampleImg from './assets/sample.svg'

export default {
  title: "Result Card",
  component: ResultCard,
  argTypes: {}
};

const Template = args => (
  <div className="app-theme">
    <ResultCard {...args} />
  </div>
);

export const Card = Template.bind({});
Card.args = {
    img:sampleImg,
    name:"The item name",
    rating: 4.5,
    category: "The category",
    price:"$$",
    isOpen: true
};

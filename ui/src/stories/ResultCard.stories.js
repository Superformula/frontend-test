import React from "react";


import ResultCard from "../components/result-card";
import '../styles/base.scss';
import sampleImg from './assets/sample.svg'
import {MemoryRouter} from 'react-router-dom'

export default {
  title: "Result Card",
  component: ResultCard,
  argTypes: {}
};

const Template = args => (
  <div className="app-theme">
    <MemoryRouter>
      <ResultCard {...args} />
    </MemoryRouter>
  </div>
);

export const Card = Template.bind({});
Card.args = {
    id:'1',
    img:sampleImg,
    name:"The item name",
    rating: 4.5,
    category: "The category",
    price:"$$",
    isOpen: true
};

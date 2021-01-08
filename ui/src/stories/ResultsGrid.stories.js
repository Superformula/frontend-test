import React from "react";


import ResultsGrid from "../components/results-grid";
import '../styles/base.scss';
import sampleImg from './assets/sample.svg'

export default {
  title: "Results Grid",
  component: ResultsGrid,
  argTypes: {}
};

const Template = args => (
  <div className="app-theme">
    <ResultsGrid {...args} />
  </div>
);

export const Grid = Template.bind({});

const sampleItems = new Array(20).fill(1).map( (_,ix)=>{
  return {
    name:"Sample Name",
    isOpen:ix % 2 === 0,
    category: 'some category',
    img: sampleImg,
    price: '$$',
    rating: 3
  }
})
Grid.args = {
  items: sampleItems
};

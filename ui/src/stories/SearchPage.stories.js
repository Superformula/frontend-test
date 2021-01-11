import React from "react";

import SearchPageComp from "../pages/search/";
import "../styles/base.scss";
import sampleImg from "./assets/sample.svg";

export default {
  title: "Pages/Search",
  component: SearchPageComp,
  argTypes: {}
};

const Template = args => (
  <div className="app-theme">
    <SearchPageComp {...args} />
  </div>
);

export const SearchPage = Template.bind({});

const sampleItems = new Array(20).fill(1).map((_, ix) => {
  return {
    id: ix,
    name: "Sample Name",
    isOpen: ix % 2 === 0,
    category: "some category",
    img: sampleImg,
    price: "$$",
    rating: 3
  };
});

SearchPage.args = {

  filterProps: {
    priceOptions: [
      { id: "$", name: "$" },
      { id: "$$", name: "$$" }
    ],
    categoryOptions: [
      { id: "1", name: "Category 1" },
      { id: "2", name: "Category 2" }
    ],
    priceFilterValue: "$$",
    categoryFilterValue: "2"
  },
  searchResultsProps: {
    items: sampleItems
  }
};

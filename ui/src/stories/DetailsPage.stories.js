import React from "react";

import DetailsPageComp from "../pages/details/";
import "../styles/base.scss";
import sampleImg from "./assets/sample.svg";

export default {
  title: "Pages/Details",
  component: DetailsPageComp,
  argTypes: {}
};

const Template = args => (
  <div className="app-theme">
    <DetailsPageComp {...args} />
  </div>
);

export const DetailsPage = Template.bind({});

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

DetailsPage.args = {
  headerProps: {
    isOpen: true,
    name: "Name here",
    category: "The Category",
    price: "$$$",
    rating: 3.5
  },
  locationProps: {
    lat: 100,
    lon: 100,
    images: [sampleImg, sampleImg],
    locationLabel: "Address here"
  },
  reviewListProps: {
    reviewCount: 10,
    items: new Array(10).fill(0).map((_, ix) => {
      return {
        id: ix,
        avatar: "",
        name: "Author Name",
        date: "10/09/2018",
        rating: Math.abs(Math.random() * 6),
        comment: `Don't be fooled by the French name, this place oozes with Californian flair. Their space is phenomenal: bright, warm colors yet clean and inviting. I've been twice for brunch and both times have been incredible! On our next trip to LA, I should really check out dinner since they seem to do more classic French preparations at that time.`
      };
    })
  }
};

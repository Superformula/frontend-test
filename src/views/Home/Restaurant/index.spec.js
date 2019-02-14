import React from "react";
import Restaurant from "./index";
import MockRouter from "react-mock-router";
import renderer from "react-test-renderer";

const testRestaurant = {
  name: "Yardbird Southern Table & Bar",
  id: "faPVqws-x-5k2CQKDNtHxw",
  alias: "yardbird-southern-table-and-bar-las-vegas",
  rating: 4.5,
  url:
    "https://www.yelp.com/biz/yardbird-southern-table-and-bar-las-vegas?adjust_creative=B4DVLDCOIfbCktNsouLWdw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=B4DVLDCOIfbCktNsouLWdw",
  price: "$$",
  photos: [
    "https://s3-media2.fl.yelpcdn.com/bphoto/LvAbNDFiFpAL_smf1lUM-g/o.jpg"
  ],
  hours: [{ is_open_now: true }],
  categories: [{ title: "Southern" }, { title: "American (New)" }]
};

test("Restaurant matches the snapshot", () => {
  const component = renderer.create(
    <MockRouter>
      <Restaurant restaurant={testRestaurant} />
    </MockRouter>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

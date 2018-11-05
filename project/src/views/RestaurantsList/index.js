import React, { useContext } from "react";
import { AppContext } from "AppContext";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { Grid, Item } from "components/ItemGrid";

import FilterNav from "./components/FilterNav";
import RestaurantCard from "./components/RestaurantCard";
require("./main.scss");

const LIST_RESTAURANTS = gql`
  query ListRestaurants(
    $location: String!
    $limit: Int!
    $open_now: Boolean
    $price: String
    $category: String
  ) {
    search(
      location: $location
      limit: $limit
      open_now: $open_now
      price: $price
      categories: $category
    ) {
      total
      business {
        photos
        name
        rating
        categories {
          title
        }
        price
        is_closed
      }
    }
  }
`;

const RestaurantsList = () => {
  const appContext = useContext(AppContext);
  const { location, openNow, price, category } = appContext;

  console.log("appContext: ", appContext);

  return (
    <div>
      <div className="padded-section">
        <h1>Restaurants</h1>
        <p>
          Green juice mustache adaptogen air plant single-origin coffee. <br />
          Beard yuccie succulents listicle, pickled gluten-free shaman YOLO
          intelligentsia occupy.
        </p>
      </div>

      <FilterNav />

      <h2 className="padded-section">All Restaurants</h2>
      <Grid>
        <Query
          query={LIST_RESTAURANTS}
          variables={{
            location,
            limit: 10,
            open_now: openNow === true,
            price: price.length ? price.length.toString() : null,
            category: category.length ? category.toLowerCase() : null
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) {
              console.log("error: ", error);
              return <p>Error :(</p>;
            }

            return data.search.business.map((business, index) => (
              <Item key={business.name + index}>
                <RestaurantCard {...business} />
              </Item>
            ));
          }}
        </Query>
      </Grid>
    </div>
  );
};

export default RestaurantsList;
